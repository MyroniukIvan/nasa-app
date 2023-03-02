import {getAllLaunches, addNewLaunch} from "../../models/launches.model.js";

export function HttpGetAllLaunches(req, res) {
    return res.json(Array.from(getAllLaunches()))
}

export function httpAddNewLaunch(req, res) {
    const launch = req.body;
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property'
        })
        // client errors 400 code bad request
    }
    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date'
        })
    }
    addNewLaunch(launch)
    return res.status(201).json
}