import express from 'express'
import jobseekerRouter from './user/jobSeeker.js';
const Router = express.Router();
Router.route('/')
  .get(async (req, res) => {
    res.send("<a href='auth/google'>Login with Google </a>");
  })
Router.use('/', jobseekerRouter)
export default Router