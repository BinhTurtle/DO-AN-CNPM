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
  const signIn = async (profile) => {
      return await jobseekerModel.signIn(profile.userName);
  }
  // Callback cho Google Auth
const googleAuthCallback = async (req, res) => {
  try {
      const user = await signIn(req.user);
      req.user = user;
      res.send("Welcome " + user.email);
  } catch (error) {
      res.redirect('/auth/google/callback/failure');
  }
};
const authFailure = (req, res) => {
  res.send("Tài Khoản chưa đăng kí");
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