// import { authenticate } from "passport";
import { authModel } from "../model/authModel.js";
import session from "express-session";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const signUp = async (req, res, next) => {
    try {
      const newUser = await authModel.signUp(req.body);
      res.status(201).send(newUser)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
const signIn = async (req, res, next) => {
      try {
        const user = await authModel.signIn(req.body);
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
const googleAuthCallbackJobseeker = async (req, res) => {
    try {
        console.log('Request User:', req.user); 
        const token = jwt.sign(
            { id: req.user._id, email: req.user.email, name: req.user.Name },
            process.env.JWT_SECRET, 
            { expiresIn: '1h' } 
        );
        res.cookie('token', token, {
          httpOnly: true,  
          secure: false,
          maxAge: 3600000,
        });
        console.log('cookies after login:', req.cookies.token);
        console.log("Cookies received: ", req.cookies);
        res.redirect('http://localhost:8080/jobseeker')
    } catch (error) {
        console.error('Error during Google auth callback:', error); 
        res.send('lỗi');
    }
  }; 
  const googleAuthCallbackRecruiter = async (req, res) => {
    try {
        console.log('Request User:', req.user); 
        const token = jwt.sign(
            { id: req.user._id, email: req.user.email, name: req.user.Name },
            process.env.JWT_SECRET, 
            { expiresIn: '1h' } 
        );
        res.cookie('token', token, {
          httpOnly: true,  
          secure: false,
          maxAge: 3600000,
        });
        console.log('cookies after login:', req.cookies.token);
        console.log("Cookies received: ", req.cookies);
        res.redirect('http://localhost:8080/recruiter')
    } catch (error) {
        console.error('Error during Google auth callback:', error); 
        res.send('lỗi');
    }
  }; 
const authFailure = (req, res) => {
  res.send("Không truy xuất được thông tin người dùng");
};
const logOut = async (req, res, next) => {

};
export const authController = {
    signUp,
    signIn,
    googleAuthCallbackJobseeker,
    googleAuthCallbackRecruiter,
    authFailure,
    logOut,
}