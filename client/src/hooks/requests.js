const API_URL = 'http://localhost:8000'
async function httpGetPlanets() {
    const res = await fetch(`${API_URL}/planets`)
    return await res.json();

}

async function httpGetLaunches() {
    const res = await fetch(`${API_URL}/launches`)
    const fetchedLaunches = await res.json();
    return fetchedLaunches.filter((a,b) => {
        return a.flightNumber - b.flightNumber
    })
}

async function httpSubmitLaunch(launch) {
    try {
        await fetch(`${API_URL}/launches`, {
            method: "post",
            body: JSON.stringify(launch),
            headers: {
                "Content-type": "application/json"
            }
        });
        return {
            ok: true
        };
    } catch (e) {
        return {
            ok: false,
        };
    }
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
}

export {
    httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch,
};