import urlModel from "./url.model.js";
import crypto from "crypto";



export const createUrl = async (req,res) => {
    try {
        const originalUrl = req.body.originalUrl;

    if(!originalUrl){
        return res.status(400).json({
            message: "Url Required"
        });
    }


    const shortCode = crypto.randomBytes(3).toString("hex");

    const newUrl = await urlModel.create({
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


export const redirectUrl = async(req,res) => {

    try {

        const shortCode = req.params.shortCode;

    const  foundRecord = await urlModel.findOne({shortCode});

    if(!foundRecord){
        return res.status(404).json({
            message:"Link dosen't exist"
        })
    }

    foundRecord.clicks += 1;
    await foundRecord.save();

    let targetUrl = foundRecord.originalUrl;



    if (!/^https?:\/\//i.test(targetUrl)) {
            targetUrl = `https://${targetUrl}`;
        }


    return res.redirect(targetUrl);


    } catch (error) {
        return res.status(500).json({
            message: error.message || error
        })
    }




}