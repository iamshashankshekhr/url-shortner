import mongoose, { Schema } from "mongoose";


const urlSchema = new mongoose.Schema(
    {
        originalUrl: {
            type: String,
            required: true,
            trim: true
        },
        shortCode: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        clicks: {

            type: Number,


        },
        createAt: {
            type: Date,
            default: Date.now,
            expires: 292000
        }
    }
)

const urlModel = mongoose.model("url",urlSchema);

export default urlModel