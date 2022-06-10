import express from "express";
const router = express.Router();

import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRooms,
  updateRoomAvailability,
} from "../controllers/roomController.js";


// CREATE room
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE room 
router.post("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// DELETE room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET Room
router.get("/:id", getRoom);

// GET RoomS
router.get("/", getAllRooms);

export default router;
