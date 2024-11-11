import { jobseekerModel } from "../../model/userModel/jobseekerModel";
const signUp = async (req, res, next) => {
    try {
      const newUser = await jobseekerModel.signUp(req.body);
      res.status(201).send(newUser)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  const signIn = async (req, res, next) => {
    try { 
      const loginUser = await jobseekerModel.signIn(req.body);
      if(!loginUser){
        const newUser = await jobseekerModel.signUp(req.body);
        res.status(201).send(newUser)
      }
      else{
        res.send("Login Success")
      }
      console.log(loginUser.token);
      res.cookie("token", loginUser.token, {
        httpOnly: true,
        maxAge: 30 * 60 * 1000,
      })
      const { token, ...result } = loginUser
      res.status(201).json(result)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  
  } 
  const getUser = async (req, res, next) => {
    try {
      const cookie = req.cookies["token"]
      if (!cookie) {
        res.status(200).send(null)
      }
      else {
        const targetUser = await userService.getUser(cookie)
        res.status(200).json(targetUser)
      }
  
    } catch (e) {
      res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(1)
      })
      console.error("Error adding document: ", e);
    }
  }
  const logOut = async (req, res, next) => {
    try {
      res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(1)
      });
      res.status(200).json({ message: "logout success" })
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  export const userController = {
    signUp,
    signIn,
    getUser,
    logOut
  }