import express from 'express'
import passport from "../passport.js"
// import { userValidation } from '../validations/userValidation.js'
import { authController } from '../controller/authController.js';
const authRouter = express.Router();
// Login with Google jobseeker
authRouter.get('/jobseeker/auth/google', passport.authenticate('jobseeker-google', { scope: ['profile', 'email'] }));
authRouter.get('/jobseeker/auth/google/callback',
    passport.authenticate('jobseeker-google', {
        successRedirect: '/jobseeker/auth/google/callback/success',
        failureRedirect: '/jobseeker/auth/google/callback/failure'
}));
authRouter.get('/jobseeker/auth/google/callback/success', authController.googleAuthCallbackJobseeker);
authRouter.get('/jobseeker/auth/google/callback/failure', authController.authFailure);

// Login with Google recruiter
authRouter.get('/recruiter/auth/google', passport.authenticate('recruiter-google', { scope: ['profile', 'email'] }));
authRouter.get('/recruiter/auth/google/callback',
    passport.authenticate('recruiter-google', {
        successRedirect: '/recruiter/auth/google/callback/success',
        failureRedirect: '/recruiter/auth/google/callback/failure'
}));
authRouter.get('/recruiter/auth/google/callback/success', authController.googleAuthCallbackRecruiter);
authRouter.get('/recruiter/auth/google/callback/failure', authController.authFailure)
//Login
authRouter.route('/login').post(authController.signIn)
//Register
authRouter.route('/register').post(authController.signUp)
// authRouter.route('/').get(articleModel.getAllArticle)
authRouter.route('/logout').post(authController.logOut)
//operation
// authRouter.route('/Info/uploadCV').post(authController.uploadCV)
export default authRouter