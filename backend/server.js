import { config } from "dotenv";
import connectDb from "./src/config/connectDB.js";
import app from "./src/app.js";



config();
connectDb();

const PORT = process.env.PORT;



app.listen(PORT,() =>{
    console.log(`Server running on PORT ${PORT}`);
})