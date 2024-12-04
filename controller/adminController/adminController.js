import { adminModel } from "../../model/adminModel.js";
import session from "express-session";
import fs from "fs";
import path from "path";

const getAdmin = async (req,res,next) =>{
    try {
      const adminId = req.body.id;
      const admin = await adminModel.getAdminById(adminId);
      if (!admin) {
        return res.status(404).json({ message: "Account not found" });
      }
      res.status(200).json({ admin });
    } catch (error) {
      console.error('Error fetching admin data:', error);
      res.status(500).json({ message: 'An error occurred while fetching admin data' });
    }
}

const addAdmin = async (req, res, next) => {
    try {
      const newAdmin = await adminModel.addAdmin(req.body);
      res.status(201).send(newAdmin)
    } catch (err) {
      console.error("Error adding new admin: ", err);
    }
}
    
const deleteAdmin = async (req, res, next) => {
    try {
      const delResult = await adminModel.deleteAdmin(req.body.id);
      res.status(200).send(delResult)
    } catch (err) {
      console.error("Error deleting admin: ", err);
    }
}

export const adminController = {
    addAdmin,
    getAdmin,
    deleteAdmin,
}