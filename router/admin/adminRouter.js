import express from 'express'
import { authenticate } from '../../middleware/authMiddleware.js';
import { adminController } from '../../controller/adminController/adminController.js';

import { uploadMiddleware } from '../../middleware/multer.js';

const adminRouter = express.Router();

//adminRouter.route('/').get(articleController.getAllArticle)

//CRUD
recruiterRouter.route('/create').post(authenticate, adminController.addAdmin)
recruiterRouter.route(':id/delete').delete(authenticate, adminController.deleteAdmin)

recruiterRouter.route('/info').get(authenticate, adminController.getAdmin)

export default adminRouter