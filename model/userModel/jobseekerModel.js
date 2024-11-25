import Joi from 'joi'
import {client} from '../../config/mongoDB.js'
const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  fullName: Joi.string().min(3).required(),
  firstName: Joi.string().min(1).required(),
  middleName: Joi.string(),
  lastName: Joi.string().min(1).required(),
  dateOfBirth: Joi.date().required(),
  address: Joi.string().required(),
  experience: Joi.string().required(),
  certifications: Joi.array().items(Joi.string()).default([]),
  skills: Joi.array().items(Joi.string()).default([]),
  education: Joi.string().required(),
});
const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
const getAllUsers = async () => {
 
}
const getAllArticle = async () => {
  try {
 const allArticle = await client.db("RecruitmentArticledatabase")
 .collection("Article")
 .find({}, { projection: { title: 1, salary: 1, address: 1, _id: 1 } })
 .toArray();
 console.log(allArticle);
 return allArticle;
} catch (err) {
  console.error(err);
} finally {
  await client.close();
}
}
const getDetailArticle = async (Id) => {
  try {
  const article = await client.db("RecruitmentArticledatabase")
  .collection("Article")
  .findOne({ _id: new ObjectId(Id) },
  { projection: { title: 1, salary: 1, address: 1,detail: 1 } }                  
  ).toArray();
  return article;
} catch (err) {
  console.error(err);
} finally {
  await client.close();
}
const submitCV = async (articleId) => {
  try{
    
  }
}
}
const signUp = async (data) => {
  try {
 const { error } = signUpSchema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }
    const existingUser = await client.db("Account").collection("Job Seeker").findOne({ email: data.email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }
    const newUser = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      address: data.address,
      experience: data.experience,
      certifications: data.certifications,
      skills: data.skills,
      education: data.education,
      createdAt: new Date(),
    };
    const result = await client.db("Account").collection("Job Seeker").insertOne(newUser);
    return result.ops[0];
  } catch (error) {
    throw new Error(error.message || "Error during sign up");
  }
};
const signIn = async (data) => {
  try {
    const { error } = signInSchema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }
    const user = await client.db("Account").collection("Job Seeker").findOne({ email: data.email });
    if (!user) {
      throw new Error("Invalid email or password");
    }
    return user; 
  } catch (error) {
    throw new Error(error.message || "Error during sign in");
  }
};
const findOneById = async (id) => {
}
const signInWithGoogle = async (profile) => {
  const account = client.db("Account").collection("Job Seeker");
  const result = await account.findOne({ googleId: profile.id });
  return result;
}
export const jobseekerModel = {
  signUp,
  signIn,
  getAllUsers,
  findOneById,
  signInWithGoogle,
  getAllArticle,
  getDetailArticle
}