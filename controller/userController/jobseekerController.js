// import { authenticate } from "passport";
import { jobseekerModel } from "../../model/userModel/jobseekerModel.js";
import session from "express-session";
const getUser = async (req,res,next) =>{
  try {
    const userId = req.user.id;
    const user = await jobseekerModel.findUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'An error occurred while fetching user data' });
  }
}
const uploadCV = async (req, res, next) => {
    try {
      console.log("User", req.user)
      const userId = req.user.id;
      if (!userId) {
        throw new Error("User not authenticated");
      }
      const fileCVPath = req.file?.path;
      const cvName = req.body?.name;
      if (!cvName ) {
        throw new Error("Invalid request: Missing CV name");
      }
      if (!fileCVPath ) {
        throw new Error("Invalid request: Missing file");
      }
      if (req.file.mimetype !== 'application/pdf') {
        throw new Error("Invalid file type. Only PDF is allowed.");
      }
      const result = jobseekerModel.uploadCV(userId,fileCVPath,cvName)
      res.status(200).json({ message: "CV uploaded successfully", userId });
    } catch (error) {
      console.error("Error during CV upload:", error);
      res.status(500).json({ message: error.message });
    }
  };
  
const updateListArticle = async (req,res,next) => {
try{
  const userId = req.user.id;
  const articleId = req.params.id
 return jobseekerModel.updateListArticle(userId,articleId)
}catch(error){
  console.error('Error during Submit:', error); 
  res.send('lỗi');
}
}
const getListArticleApply = async (req,res,next) => {
  try{
    const userId = req.user.id;
   return jobseekerModel.getListArticleApply(userId)
  }catch(error){
    console.error('Error: ', error); 
    res.send('lỗi');
  }
  }
  export const jobseekerController = {
    uploadCV,
    updateListArticle,
    getUser,
    getListArticleApply
  }
