import Joi from 'joi'
import {DB} from '../../config/mongoDB.js'

// const jobseekerSchema = new mongoose.Schema({
//   googleId: { type: String, required: true },
//   userName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   avatar: { type: String },
//   resume: { type: String }, // Ví dụ, thông tin bổ sung cho jobseeker
//   // Các trường đặc biệt cho jobseeker
// });
// const Jobseeker = mongoose.model('Jobseeker', jobseekerSchema);

// const USER_SIGNIN_COLLECTION_SCHEMA = Joi.object({
//   email: Joi.string().email().required().min(3).max(50),
//   password: Joi.string().min(7).required().trim().strict()

// })
// // const INVALID_DATA_UPDATE = ['_id', 'createdAt']
// const validObjectValueSignUp = async (data) => {
//   return await USER_SIGNUP_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
// }
// const validObjectValueSignIn = async (data) => {
//   return await USER_SIGNIN_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
// }
const getAllUsers = async () => {
 
}
const signUp = async (Data) => {
}   
const findOneById = async (id) => {
  try {
    const account = DB.collection("Job Seeker");
    const user = await account.findOne({ID: id});
    return user
  } catch (error) {
    throw new Error(error)
  }
}
const signIn = async (profile) => {
  const account = DB.db("Account").collection("Job Seeker");
  const result = await account.findOne({ userName: profile.emails[0].value  });
  return result;
}
const getUser = async (cookie) => {
  
}
export const jobseekerModel = {
  signUp,
  getAllUsers,
  findOneById,
  signIn,
  getUser,
}