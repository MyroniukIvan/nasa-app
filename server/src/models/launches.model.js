const launches = new Map();
let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)

function getAllLaunches() {
    return Array.from(launches.values())
}

const newLaunch = Object.assign({}, launch, {
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
    flightNumber: latestFlightNumber,
});

launches.set(latestFlightNumber, newLaunch);

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, newLaunch)
}

// key flightNumber: value {
// key: launch: value: {...args - not required}}

export {
    getAllLaunches, addNewLaunch,
}