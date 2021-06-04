import express from "express";

const videosRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videosRouter.get("/watch", handleWatchVideo);

export default videosRouter;