import express from "express";
import {HttpGetAllLaunches, httpAddNewLaunch} from "./launches.controller.js";

const launchesRouter = express.Router();

launchesRouter.get('/', HttpGetAllLaunches)
launchesRouter.post('/', httpAddNewLaunch)


export {
    launchesRouter
}