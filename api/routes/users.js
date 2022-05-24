import express from "express";

import {updateUser, deleteUser, getUser, getAllUser} from "../controllers/userController.js"

const router = express.Router();


// UPDATE user
router.post("/:id", updateUser);

// DELETE user
router.delete('/:id',deleteUser)

// GET user
router.get("/:id", getUser)

// GET USERS
router.get("/", getAllUser)


export default router;