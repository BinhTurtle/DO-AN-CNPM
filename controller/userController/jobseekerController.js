// import { authenticate } from "passport";
import { jobseekerModel } from "../../model/userModel/jobseekerModel.js";
const signUp = async (req, res, next) => {
    try {
      const newUser = await jobseekerModel.signUp(req.body);
      res.status(201).send(newUser)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
    const signIn = async (req, res, next) => {
      try {
        const user = await jobseekerModel.signIn(req.body);
        if (!user) {
          return res.status(401).send({ message: "Invalid email or password" });
        }
        res.status(200).send({
          message: "Login successful",
          user,
        });
      } catch (e) {
        console.error("Error during sign in:", e);
        res.status(500).send({ message: "An error occurred during sign in" });
      }
    };
  const googleAuthCallback = async (req, res) => {
    try {
        console.log('Request User:', req.user); 
        res.send("Welcome " + req.user.Name);
    } catch (error) {
        console.error('Error during Google auth callback:', error); 
        res.send('lỗi');
    }
  };
  
const authFailure = (req, res) => {
  res.send("Không truy xuất được thông tin người dùng");
};
  const getUser = async (req, res, next) => {

  }
  const logOut = async (req, res, next) => {

  }
  export const jobseekerController = {
    signUp,
    signIn,
    getUser,
    logOut,
    googleAuthCallback,
    authFailure
  }