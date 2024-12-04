import express from 'express'
import { authenticate } from '../../middleware/authMiddleware.js';
import { jobseekerController } from "../../controller/userController/jobseekerController.js"
import { articleController } from '../../controller/articleController.js';
import { uploadMiddleware } from '../../middleware/multer.js';

const jobseekerRouter = express.Router();
//Login
jobseekerRouter.route('/').get(articleController.getAllArticle)
jobseekerRouter.route('/:id').get(articleController.getDetailArticle)
jobseekerRouter.route('/:id/submitCV').post(authenticate,articleController.updateSubmitCVForArticle)
jobseekerRouter.route('/info').get(authenticate,jobseekerController.getUser)
//Register
jobseekerRouter.route('/info/uploadCV').post(authenticate,uploadMiddleware,jobseekerController.uploadCV);
jobseekerRouter.route('/info/listApply').get(authenticate,jobseekerController.getListArticleApply)
export default jobseekerRouter