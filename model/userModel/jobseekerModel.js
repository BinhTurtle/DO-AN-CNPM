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
const updateListArticle = async (userId, articleId) => {
  try {
    const result = await client
      .db("Account")
      .collection("Job Seeker")
      .updateOne(
        { _id: new ObjectId(userId) },
        { $addToSet: { ApplyList: new ObjectId(articleId) } } // Sử dụng $addToSet để tránh trùng lặp
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

export const jobseekerModel = {
  uploadCV,
  updateListArticle,
  getUser,
  findUserById,
  getListArticleApply
}