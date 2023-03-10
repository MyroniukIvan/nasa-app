import express from 'express'
import morgan from 'morgan'
import {planetsRouter} from "./routes/planets/planets.router.js";
import {launchesRouter} from "./routes/launches/launches.router.js";
import cors from 'cors'
import {fileURLToPath} from 'url';
import path, {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(morgan('combined'))

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/planets', planetsRouter)
app.use('/launches', launchesRouter)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


// for almost all apps
