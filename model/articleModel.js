import Joi from 'joi'
import {client} from '../config/mongoDB.js'
import fs from 'fs';
import { ObjectId } from 'mongodb';
const createJobApplication = async(recruiterId) => {

}
const deleteJobApplication = async (jobId) =>{
    try {
        const result = await client.db("RecruitmentArticledatabase").collection("Article").deleteOne(
            { _id: new ObjectId(jobId) }
        );

        if (result.deletedCount === 0) {
            throw new Error("Job post not found");
        }

        return {
            message: "Job post deleted successfully",
            jobId,
        };
    } catch (error) {
        console.error("Error deleting job post:", error);
        throw new Error(error.message || "Failed to delete job post.");
    }
}
const updateJobApplication = async (jobId, jobseekerId) => {
   
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
  } finally {
    await client.close();
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
      console.log("CV",user)
      const newJobseeker = {
        id: new ObjectId(),
        userId: jobseekerId,
        name: name,
        gender: gender,
        gmail: gmail,
        cvFile: selectedCV,
        status: "Chưa Xem", 
        submittedAt: new Date(), 
      };
      const result = await client
        .db("RecruitmentArticledatabase")
        .collection("Article")
        .updateOne(
          { _id: new ObjectId(articleId) }, 
          {
            $inc: { "jobseekerList.quantity": 1 },
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