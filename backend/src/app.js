import express from "express";
import cors from "cors";
import { urlRouter } from "./module/url/url.route.js";
import { redirectUrl } from "./module/url/url.controller.js";


const app = express();


app.use(express.json())
app.use(cors());


app.use("/api/url",urlRouter);
app.get("/:shortCode",redirectUrl);



export default app;