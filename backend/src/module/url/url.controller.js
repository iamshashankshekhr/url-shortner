import urlModel from "./url.model";
import crypto from "crypto";



export const createUrl = async (req,res) => {
    try {
        const originalUrl = req.body;

    if(!originalUrl){
        return res.status(400).json({
            message: "Url Required"
        });
    }


    const shortCode = crypto.randomBytes(3).toString("hex");

    const newUrl = await url.create({
        originalUrl,
        shortCode,
        clicks : 0 
    })

    return res.status(201).json({
        newUrl
    })


    } catch (error) {

        return res.status(500).json({
            message: error
        })
        
    }

}


