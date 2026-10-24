import { Router } from "express";
import {createUrl} from "./url.controller.js";
import { redirectUrl } from "./url.controller.js";


export const urlRouter = Router();

urlRouter.post("/",createUrl);



export default urlRouter;