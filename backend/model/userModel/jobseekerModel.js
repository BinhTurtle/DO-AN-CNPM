import Joi from 'joi'
import {client} from '../../config/mongoDB.js'
import fs from 'fs';
import { articleModel } from '../articleModel.js';
import { ObjectId } from 'mongodb';

const getUser = async (id) => {
  try {
    const user = await client
      .db("Account")
      .collection("Job Seeker")
      .findOne({ _id: new ObjectId(id) });
    if (!user) {
      return { error: 'User not found' };
    }
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return { error: 'An error occurred while fetching the user' };
  }
};

const findUserById = async (id) => {
  try {
    const user = await client
      .db("Account")
      .collection("Job Seeker")
      .findOne({ _id: new ObjectId(id) });
    if (!user) {
      return { error: 'User not found' };
    }
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return { error: 'An error occurred while fetching the user' };
  }
};


const uploadCV = async (userId, fileCVPath, cvName) => {
  if (!fs.existsSync(fileCVPath)) {
    throw new Error("File not found.");
  }
  const cvBuffer = fs.readFileSync(fileCVPath);
  const base64Data = cvBuffer.toString('base64')
  const result = await client
  .db("Account")
  .collection("Job Seeker")
  .updateOne(
    { _id: new ObjectId(userId) },
    {
      $push: {
        CVProfile: { 
          _id: new ObjectId(),
          name: cvName,
          cvFile: {
            contentType: "application/pdf",
            data: base64Data,
          },
          updatedAt: new Date(),
        },
      },
    }
  );
if (result.matchedCount === 0) {
  throw new Error("User not found");
}
return { message: "CV profile updated successfully", userId: userId };
}
const deleteCV = async (CVID,userId) =>{
  try {
    const result = await client
    .db("Account")
    .collection("Job Seeker")
    .updateOne(
      { _id: new ObjectId(userId) },  
      { $pull: { CVProfile: { _id: new ObjectId(CVID) } } }  // Xóa CV theo cvId
    );

    // Kiểm tra kết quả
    if (result.modifiedCount === 0) {
      throw new Error('Không tìm thấy CV hoặc không thể xóa.');
    }

    return { message: 'CV đã được xóa thành công.' };
  } catch (error) {
    throw new Error(`Có lỗi xảy ra: ${error.message}`);
  }
}
const updateListArticle = async (userId, articleId) => {
  try {
    const result = await client
      .db("Account")
      .collection("Job Seeker")
      .updateOne(
        { _id: new ObjectId(userId) },
        { $addToSet: { ApplyList: new ObjectId(articleId) } }
      );

    if (result.modifiedCount === 0) {
      return { success: false, message: "Article already in ApplyList" };
    }
    return { success: true, message: "Article added to ApplyList successfully" };

  } catch (error) {
    console.error("Error updating ApplyList:", error);
    throw new Error(error.message || "Failed to update ApplyList.");
  }
};
const getListArticleApply = async (userId) => {
  try {
    const List = await client
      .db("Account")
      .collection("Job Seeker")
      .findOne({ _id: new ObjectId(userId) },
      { projection: { articleList: 1, _id: 0 } } );
      const articles = await client
      .db("RecruitmentArticledatabase")
      .collection("Article")
      .find({ _id: { $in: List.map((id) => new ObjectId(id)) } },
      { projection: { _id: 1,title: 1, salary: 0, address: 0,detail: 0 } })
      .toArray();
    return articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return { error: "An error occurred while fetching the articles." };
  }
};
const getFavouriteArticle = async (userId) => {
  try {
    const user = await client
      .db("Account")
      .collection("Job Seeker")
      .findOne(
        { _id: new ObjectId(userId) },
        { projection: { favouriteList: 1, _id: 0 } }
      );
    if (!user || !user.favouriteList || user.favouriteList.length === 0) {
      return { success: true, articles: [] };
    }
    const articles = await client
      .db("RecruitmentArticledatabase")
      .collection("Article")
      .find({ _id: { $in: user.favouriteList.map(id => new ObjectId(id)) } })
      .toArray();
    return { success: true, articles };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return { error: "An error occurred while fetching the articles." };
  }
};
const addFavouriteArticle = async (userId, articleId) => {
  try {
    const result = await client
      .db("Account")
      .collection("Job Seeker")
      .updateOne(
        { _id: new ObjectId(userId) },
        { $addToSet: { favouriteList: articleId } }
      );

    return result.modifiedCount > 0
      ? { success: true, message: "Article added to favourites." }
      : { success: false, message: "Article is already in favourites or user not found." };
  } catch (error) {
    console.error("Error adding article to favourites:", error);
    return { error: "An error occurred while adding the article to favourites." };
  }
};

const removeFavouriteArticle = async (userId, articleId) => {
  try {
    const result = await client
      .db("Account")
      .collection("Job Seeker")
      .updateOne(
        { _id: new ObjectId(userId) },
        { $pull: { favouriteList: articleId } }
      );
    if (result.modifiedCount > 0) {
      return { success: true, message: "Article removed from favourites." };
    } else {
      return { success: false, message: "Article not found in favourites or user not found." };
    }
  } catch (error) {
    console.error("Error removing article from favourites:", error);
    return { error: "An error occurred while removing the article from favourites." };
  }
};

export const jobseekerModel = {
  uploadCV,
  deleteCV,
  updateListArticle,
  getUser,
  findUserById,
  getListArticleApply,
  getFavouriteArticle,
  addFavouriteArticle,
  removeFavouriteArticle,
}