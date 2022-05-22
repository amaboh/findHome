import express from "express";

import {createHotel, updateHotel, deleteHotel, getHotel, getALlHotels} from "../controllers/hotelController.js"


const router = express.Router();


// CREATE
router.post("/", createHotel )
 
// UPDATE
router.put("/:id", updateHotel)

// DELETE
router.delete("/:id", deleteHotel)

// GET
router.get('/:id', getHotel)

// GET ALL
router.get("/", getALlHotels)


export default router;