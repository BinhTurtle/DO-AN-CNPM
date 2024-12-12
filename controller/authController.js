// import { authenticate } from "passport";
import { authModel } from "../model/authModel.js";
import session from "express-session";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const signUpWithJobseeker = async (req, res, next) => {
    try {
      const newUser = await authModel.signUpWithJobseeker(req.body);
      res.status(201).send(newUser)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
const signInWithJobseeker = async (req, res, next) => {
      try {
        const user = await authModel.signInWithJobseeker(req.body);
        if (!user) {
          return res.status(401).send({ message: "Invalid email or password" });
        }
      const token = jwt.sign(
          { id: user._id, email: user.email, name: user.Name },
          process.env.JWT_SECRET, 
          { expiresIn: '1h' } 
      );
      res.cookie('token', token, {
        httpOnly: false,  
        secure: false,
        maxAge: 3600000,
      });
      console.log('cookies after login:', req.cookies.token);
      console.log("Cookies received: ", req.cookies);
      res.status(200).send({
        message: "Login successful"
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
        console.log(token);
        res.cookie('token', token, {
          httpOnly: false,  
          secure: false,
          maxAge: 3600000,
        });
        console.log('cookies after login:', req.cookies.token);
        console.log('cookies token:', req.cookies);
        res.redirect('http://localhost:5173/jobseeker');
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
          httpOnly: false,  
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
  try {
    res.clearCookie('token', {
      httpOnly: false,  
      secure: false,  
      sameSite: 'None', 
    });

    res.status(200).send({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).send({ message: 'An error occurred while logging out' });
  }
};
export const authController = {
    signUpWithJobseeker,
    signInWithJobseeker,
    googleAuthCallbackJobseeker,
    googleAuthCallbackRecruiter,
    authFailure,
    logOut,
}