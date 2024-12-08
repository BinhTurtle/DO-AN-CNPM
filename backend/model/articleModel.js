import Joi from 'joi'
import {client} from '../config/mongoDB.js'
import fs from 'fs';
import { ObjectId } from 'mongodb';
const createJobApplication = async(recruiterId, data) => {
  try {
    if (
      !data.title ||
      !data.salary ||
      !data.address ||
      !data.detail
    ) {
      throw new Error("Missing required fields");
    }
    const newArticle = {
      _id: new ObjectId(),
      recruiterId: new ObjectId(recruiterId),
      title: data.title,
      salary: data.salary,
      address: data.address,
      detail: data.detail,
      jobseekerList: {
        quantity: 0,
        list:[], 
      },
      createdAt: new Date(),
    };
    const result = await client
      .db("RecruitmentArticledatabase")
      .collection("Article")
      .insertOne(newArticle);
    return result.ops[0];
  } catch (error) {
    console.error("Error creating job application:", error.message);
    throw new Error(error.message);
  }
};
const deleteJobApplication = async (jobId) =>{
    try {
        const result = await client.db("RecruitmentArticledatabase").collection("Article").deleteOne(
            { _id: new ObjectId(jobId) }
        );

        if (result.deletedCount === 0) {
            throw new Error("Job post not found");
        }
        return;
    } catch (error) {
        console.error("Error deleting job post:", error);
        throw new Error(error.message || "Failed to delete job post.");
    }
}
const updateJobApplication = async (jobId, data) => {
  try {
    const updateFields = {
      ...(data.title && { title: data.title }),
      ...(data.salary && { salary: data.salary }),
      ...(data.address && { address: data.address }),
      ...(data.detail && { detail: data.detail }),
    };

    const result = await client
      .db("RecruitmentArticledatabase")
      .collection("Article")
      .updateOne({ _id: new ObjectId(jobId) }, { $set: updateFields });
    if (result.matchedCount === 0) {
      throw new Error("Job post not found");
    }
    return { success: true, message: "Job post updated successfully" };
  } catch (error) {
    console.error("Error updating job post:", error);
    throw new Error(error.message || "Failed to update job post.");
  }
};

const getAllArticle = async () => {
    try {
   const allArticle = await client.db("RecruitmentArticledatabase")
   .collection("Article")
   .find({}, { projection: { title: 1, salary: 1, address: 1, _id: 1 } })
   .toArray();
   console.log(allArticle);
   return allArticle;
  } catch (err) {
    console.error(err);
  } 
  }
const getDetailArticle = async (Id) => {
    try {
    const article = await client.db("RecruitmentArticledatabase")
    .collection("Article")
    .findOne({ _id: new ObjectId(Id) },
    { projection: { title: 1, salary: 1, address: 1,detail: 1 } }                  
    );
    return article;
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
  }
const getArticlesByRecruiterId = async (recruiterId) => {
    try {
        const articles = await client
            .db("RecruitmentArticledatabase")
            .collection("Article")
            .find({ recruiterId: new ObjectId(recruiterId) },
            { projection: { title: 1, address: 1, _id: 1 } })
            .toArray();
        if (articles.length === 0) {
            return { message: "No articles found for this recruiter", recruiterId };
        }
        return articles;
    } catch (error) {
        console.error("Error retrieving articles by recruiterId:", error);
        throw new Error(error.message || "Failed to retrieve articles.");
    }
};
const updateSubmitCVForArticle = async (articleId, jobseekerId,data) => {
    try {
      const { name,gender,gmail} = data;
      if (!name || !gender || !gmail) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields: articleId, name, or cvId.",
        });
      }
      const user = await client
      .db("Account")
      .collection("Job Seeker")
      .findOne(
        { _id: new ObjectId(jobseekerId) },
        { projection: { CVProfile: 1 } } 
      );
      const selectedCV = user.CVProfile[0];
      console.log("CV",selectedCV)
      const newJobseeker = {
        id: new ObjectId(),
        userId: jobseekerId,
        name: name,
        gender: gender,
        gmail: gmail,
        cvInfo: selectedCV,
        status: "Chưa Xem", 
        submittedAt: new Date(), 
      };
      const result = await client
        .db("RecruitmentArticledatabase")
        .collection("Article")
        .updateOne(
          { _id: new ObjectId(articleId) }, 
          {
            $set: { "jobseekerList.quantity": 1 },
            $push: { "jobseekerList.list": newJobseeker }, 
          }
        );
      if (result.modifiedCount === 1) {
        return { success: true, message: "CV submitted successfully." };
      } else {
        return { success: false, message: "Failed to update the article." };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: "An error occurred while submitting CV." };
    }
  };
  export const articleModel ={
    createJobApplication,
    deleteJobApplication,
    updateJobApplication,
    getAllArticle,
    getArticlesByRecruiterId,
    getDetailArticle,
    updateSubmitCVForArticle
  }