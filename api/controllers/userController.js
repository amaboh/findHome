import User from "../models/User.js";

import { createError } from "../utils/error.js";



export const updateUser = async (req, res)=>{
    try {
       const updatedUser = await User.findByIdAndUpdate(
           req.params.id, 
           {$set: req.body},
           {new: true}
        );
       res.status(200).json(updatedUser);
    } catch (err) {
        next(err);  
    }
}

export const deleteUser = async (req, res)=> {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been delted. ");
    } catch (err) {
        next(err);  
    }
   
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);  
    }
}

export const getAllUser = async (req, res) => {
    
    try {
         const user = await User.find();
         res.status(200).json(users);
    } catch (err) {
        next(err)
    }
 }