import express from "express";

import {createHotel, updateHotel, deleteHotel, getHotel, getALlHotels, countByCity, countByType} from "../controllers/hotelController.js"

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


// CREATE
router.post("/", verifyAdmin, createHotel )
 
// UPDATE
router.put("/:id", verifyAdmin, updateHotel)

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

// GET
router.get("/find/:id", getHotel)

// GET ALL
router.get("/", getALlHotels)

router.get("/countByCity", countByCity)
router.get("/countByType", countByType)


export default router;
