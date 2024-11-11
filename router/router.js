import express from 'express'
import jobseekerRouter from './user/jobSeeker.js';
const Router = express.Router();
Router.route('/')
  .get(async (req, res) => {
    res.status(200).end('<h1>Hello World!</h1><hr>')
  })
Router.use('/jobseeker', jobseekerRouter)
export default Router