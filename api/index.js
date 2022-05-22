import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"


const app = express();
dotenv.config()


const PORT = process.env.PORT

// connect to mongodb database using mongoose
const connect = async ()=>{
     try {
          await mongoose.connect(process.env.MONGODB);
        } catch (error) {
          throw error
        }
};

 
mongoose.connection.on("disconnected", ()=>{
     console.log("mongDB disconnected!")
})
 
// niddlewares
app.use("/api/auth", authRoute )
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use('/api/rooms', roomsRoute)



app.listen(PORT, ()=>{ 
     connect()
     console.log(`Connected to backend port: http://localhost:${PORT}`);
}) 

