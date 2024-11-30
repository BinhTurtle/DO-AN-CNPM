import Joi from 'joi'
import {client} from '../../config/mongoDB.js'
import fs from 'fs';
import { articleModel } from '../articleModel.js';
import { ObjectId } from 'mongodb';
const getUser = async (id) => {
  try {
    const user = await client
      .db("Account")
      .collection("Recruiter")
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
// const getArticleById = async (id) => {
//   try {
//     const user = await client
//       .db("Account")
//       .collection("Recruiter")
//       .findOne({ _id: new ObjectId(id) });
//     if (!user) {
//       return { error: 'User not found' };
//     }
//     return user;
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     return { error: 'An error occurred while fetching the user' };
//   }
// };
const getListCVFromArticle = async (articleId) => {
    try {
      const article = await client
        .db("RecruitmentArticledatabase")
        .collection("Article")
        .findOne({ _id: new ObjectId(articleId) });
      if (!article) {
        return { error: 'Article not found' };
      }
      const { jobseekerList } = article;
      return jobseekerList;
    } catch (error) {
      console.error('Error fetching user:', error);
      return { error: 'An error occurred while fetching the user' };
    }
  };
const getDetailCV = async () => {
  
};
const replyCV = async () => {

}
export const recruiterModel = {
  getUser,
  getListCVFromArticle,
  getDetailCV,
  replyCV
}