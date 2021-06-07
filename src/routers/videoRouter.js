import express from "express";
import {see, edit, upload, deleteVideo} from "../controllers/videoController";

const videosRouter = express.Router();

videosRouter.get("/:id(\\d+)", see);
videosRouter.get("/:id(\\d+)/edit", edit);
videosRouter.get("/:id(\\d+)/delete", deleteVideo);
videosRouter.get("/upload", upload);


export default videosRouter;