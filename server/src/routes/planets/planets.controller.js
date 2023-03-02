import {getAllPlanets} from "../../models/planets.model.js";

export function HttpGetAllPlanets(req,res) {
   return res.json(getAllPlanets())
}