import express from "express";
import cors from "cors";


const app = express();


app.use(express.json())




app.get("/",(req,res) =>{
    res.send("Backend is alive")
})



export default app;