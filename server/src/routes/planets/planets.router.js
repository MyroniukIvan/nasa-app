import express from "express";
import {HttpGetAllPlanets} from "./planets.controller.js";

const planetsRouter = express.Router();

planetsRouter.get('/', HttpGetAllPlanets)


export {
    planetsRouter
}