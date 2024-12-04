// import { authenticate } from "passport";
import { recruiterModel } from "../../model/userModel/recruiterModel.js";
import session from "express-session";
import fs from "fs";
import path from "path";

const getUser = async (req,res,next) =>{
  try {
    const userId = req.user.id;
    const user = await recruiterModel.findUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'An error occurred while fetching user data' });
  }
}
// const getArticleById = async (req, res, next) => {
//     try {
//         const articleId = req.params.id;
//         if (!ObjectId.isValid(articleId)) {
//           return res.status(400).json({ message: "Invalid article ID format" });
//         }
//         const article = await articleModel.getDetailArticle(articleId);
//         if (!article) {
//           return res.status(404).json({ message: "Article not found" });
//         }
//         res.status(200).json({ message: "Article found", data: article });
//       } catch (error) {
//         console.error("Error fetching article details:", error);
//         res.status(500).json({ message: "Internal server error" });
//       }
//   };
const getListCVFromArticle = async (req,res,next) => {
    try {
        const  articleId  = req.params.id;
        if (!articleId) {
          return res.status(400).json({
            success: false,
            message: 'Article ID is required.',
          });
        }
        const cvList = await recruiterModel.getListCVFromArticle(articleId);
        if (cvList.length === 0) {
          return res.status(404).json({
            success: false,
            message: 'No CVs found for this article.',
          });
        }
        return res.status(200).json({
          success: true,
          cvList: cvList,
        });
      } catch (error) {
        console.error('Error fetching CVs:', error);
        return res.status(500).json({
          success: false,
          message: 'An error occurred while fetching CVs.',
        });
      }
  }
  const getDetailCV = async (req, res, next) => {
    try {
      const articleId = req.params?.articleId;
      const cvId = req.params?.cvId;
      if (!articleId || !cvId) {
        return res.status(400).json({ error: "Missing articleId or cvId in params" });
      }
      const cvFile = await recruiterModel.getDetailCV(articleId, cvId);
      console.log(cvFile);
      if (!cvFile || !cvFile.data) {
        return res.status(404).json({ error: "CV file not found" });
      }

      const pdfBuffer = Buffer.from(cvFile.data, "base64");
      const fileName = `${cvFile.name || "CV"}_${cvId}.pdf`;
      const filePath = path.join("uploads", fileName);
  
      fs.writeFileSync(filePath, pdfBuffer);
      res.download(filePath, fileName, (err) => {
        if (err) {
          console.error("Error sending file:", err);
          return res.status(500).json({ error: "Error sending file" });
        }
        fs.unlinkSync(filePath);
      });
    } catch (error) {
      console.error("Error in getDetailCV:", error);
      res.status(500).json({ error: error.message });
    }
  };
const replyCV = async (req,res,next) => {

  }
export const recruiterController = {
    getUser,
    getListCVFromArticle,
    getDetailCV,
    replyCV
  }
