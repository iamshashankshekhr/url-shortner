import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connection sucessfull");
    } catch (error) {

        console.error("Error Ayya",error);
        
    }
}

export default connectDb;