import Joi from 'joi'
import { client } from '../config/mongoDB.js';
// import fs from 'fs';
// import { articleModel } from '../articleModel.js';
const signUpJobseekerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  surname: Joi.string().min(1).required(),
  name: Joi.string().min(1).required(),
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
// const applyForm = Joi.object(
//   {
//     _id: Joi.string().required(),
//     name: Joi.string().required(),
//     CV: Joi.string().required()
//   }
// )
//LoginModel User
const signUpWithJobseeker = async (data) => {
  try {
 const { error } = signUpJobseekerSchema.validate(data);
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
      surname: data.surname,
      name: data.name,
      dateOfBirth: data.dateOfBirth,
      address: data.address,
      experience: data.experience,
      certifications: data.certifications,
      skills: data.skills,
      education: data.education,
      createdAt: new Date(),
      role: 'Jobseeker',
    };
    const result = await client.db("Account").collection("Job Seeker").insertOne(newUser);
    return result.ops[0];
  } catch (error) {
    throw new Error(error.message || "Error during sign up");
  }
};

const signInWithJobseeker = async (data) => {
  try {
    const { error } = signInSchema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }
    const user = await client.db("Account").collection("Job Seeker").findOne({ email: data.email });
    console.log(user);
    if (!user) {
      throw new Error("Invalid email or password");
    }
    // const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (data.password != user.password) {
        throw new Error("Invalid email or password");
    }
    return user;
  } catch (error) {
    throw new Error(error.message || "Error during sign in");
  }
};
// const signUpWithRecruiter = async (data) => {
//   try {
//  const { error } = signUpSchema.validate(data);
//     if (error) {
//       throw new Error(error.details[0].message);
//     }
//     const existingUser = await client.db("Account").collection("Job Seeker").findOne({ email: data.email });
//     if (existingUser) {
//       throw new Error("User with this email already exists");
//     }
//     const newUser = {
//       email: data.email,
//       password: data.password,
//       fullName: data.fullName,
//       dateOfBirth: data.dateOfBirth,
//       address: data.address,
//       experience: data.experience,
//       certifications: data.certifications,
//       skills: data.skills,
//       education: data.education,
//       createdAt: new Date(),
//       role: 'Jobseeker',
//     };
//     const result = await client.db("Account").collection("Job Seeker").insertOne(newUser);
//     return result.ops[0];
//   } catch (error) {
//     throw new Error(error.message || "Error during sign up");
//   }
// };

const signInWithRecruiter = async (data) => {
  try {
    const { error } = signInSchema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }
    const user = await client.db("Account").collection("Recruiterr").findOne({ email: data.email });
    if (!user) {
      throw new Error("Invalid email or password");
    }
    // const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (data.password != user.password) {
        throw new Error("Invalid email or password");
    }
    return user;
  } catch (error) {
    throw new Error(error.message || "Error during sign in");
  }
};
const signInWithGoogleJobSeeker = async (profile) => {
  const account = client.db("Account").collection("Job Seeker");
  const result = await account.findOne({ googleId: profile.id });
  return result;
}

const signInWithGoogleRecruiter = async (profile) => {
  const account = client.db("Account").collection("Recruiter");
  const result = await account.findOne({ email: profile.email });
  return result;
}

const logout = async => {

}

export const authModel = {
    signUpWithJobseeker,
    signInWithJobseeker,
    signInWithRecruiter,
    signInWithGoogleJobSeeker,
    signInWithGoogleRecruiter,
    logout,

}