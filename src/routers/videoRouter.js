import express from "express";
import {watch, getEdit, postEdit} from "../controllers/videoController";

const videosRouter = express.Router();

videosRouter.get("/:id(\\d+)", watch);
videosRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);


export default videosRouter;