import express from "express";

import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from "../controllers/userController.js";
import {verifyUser, verifyToken, verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id",verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all accounts ");
// });

// UPDATE user
router.post("/:id",verifyUser, updateUser);

// DELETE user
router.delete("/:id",verifyUser, deleteUser);

// GET user
router.get("/:id",verifyUser, getUser);

// GET USERS
router.get("/", verifyAdmin, getAllUser);

export default router;
