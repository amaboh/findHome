import express from "express";

import {register} from "../controllers/authController.js"
const router = express.Router();

router.post('/register', register )
  
router.get("/register", (req, res)=>{
    res.send("This is the regiatration endpoint")
})

export default router;