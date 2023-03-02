import http from 'http'
import {app} from "./app.js";
import {loadPlanetsData} from "./models/planets.model.js";


const server = http.createServer(app)
const PORT = process.env.PORT || 8000;

const startServer = async () => {
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log('server started on ' + PORT)
    })
}
startServer();
// for almost all apps

