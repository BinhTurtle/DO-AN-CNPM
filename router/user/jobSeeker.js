import express from 'express'
import passport from "../../passport.js"
// import { userValidation } from '../validations/userValidation.js'
import { jobseekerController } from "../../controller/userController/jobseekerController.js"

const jobseekerRouter = express.Router();
// Login with Google
jobseekerRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
jobseekerRouter.get('/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/callback/success',
        failureRedirect: '/auth/google/callback/failure'
}));
jobseekerRouter.get('/auth/google/callback/success', jobseekerController.googleAuthCallback);
jobseekerRouter.get('/auth/google/callback/failure', jobseekerController.authFailure);
//Register with Google
jobseekerRouter.route('/register').post(jobseekerController.signUp)
jobseekerRouter.route('/').get(jobseekerController.getUser)
jobseekerRouter.route('/logout').post(jobseekerController.logOut)


export default jobseekerRouter