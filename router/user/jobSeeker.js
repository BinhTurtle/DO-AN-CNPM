import express from 'express'
// import { userValidation } from '../validations/userValidation.js'
import { jobseekerController } from '../../controller/userController/jobseekerController'
const jobseekerRouter = express.Router();


jobseekerRouter.route('/login').post(jobseekerController.signIn)
jobseekerRouter.route('/register').post(jobseekerController.signUp)
jobseekerRouter.route('/').get(jobseekerController.getUser)
jobseekerRouter.route('/logout').post(jobseekerController.logOut)


export default jobseekerRouter