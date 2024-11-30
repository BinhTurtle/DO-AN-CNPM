import { articleModel } from "../model/articleModel.js";
import session from "express-session";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ObjectId } from "mongodb";
const createJobApplication = async (req,res,next) => {

}
const deleteJobApplication = async (req,res,next) => {
    
}

const updateJobApplication = async (req,res,next) => {
    
}

const getAllArticle = async (req,res,next) => {
    try {
        const articles = await articleModel.getAllArticle();
        if (!articles || articles.length === 0) {
          return res.status(404).json({ message: "No articles found" });
        }
        res.status(200).json(articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).json({ message: 'An error occurred while fetching articles' });
      }
}

const getArticlesByRecruiterId = async (req, res) => {
  try {
    const recruiterId  = req.user.id;
    if (!recruiterId) {
      return res.status(400).json({
        success: false,
        message: 'Recruiter ID is required.',
      });
    }
    const articles = await  articleModel.getArticlesByRecruiterId(recruiterId);
    if (articles.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No articles found for this recruiter.',
      });
    }
    return res.status(200).json({
      articles: articles,
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching articles.',
    });
  }
};
const getDetailArticle = async (req, res, next) => {
    try {
      const articleId = req.params.id;
      if (!ObjectId.isValid(articleId)) {
        return res.status(400).json({ message: "Invalid article ID format" });
      }
  
      const article = await articleModel.getDetailArticle(articleId);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.status(200).json({ message: "Article found", data: article });
    } catch (error) {
      console.error("Error fetching article details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  const updateSubmitCVForArticle = async (req, res, next) => {
    try {
      const  articleId  = req.params.id; 
      const userId = req.user.id;
    const result = await articleModel.updateSubmitCVForArticle(articleId,userId, req.body);
    if (result) {
        return res.status(200).json({
          success: true,
          message: "CV submitted successfully.",
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Failed to update article with CV information.",
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "An error occurred while submitting the CV.",
        error: err.message,
      });
    }
  };
export const articleController ={
    createJobApplication,
    deleteJobApplication,
    updateJobApplication,
    getAllArticle,
    getArticlesByRecruiterId,
    getDetailArticle,
    updateSubmitCVForArticle
  }