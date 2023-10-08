const url = "http://localhost:5000";
async function httpGetPlanets() {
  const response = await fetch(`${url}/planets`);

  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${url}/launch`);
  const launches = await response.json();
  return launches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${url}/launch`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (e) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${url}/launch/${id}`, {
      method: "delete",
    });
  } catch (e) {
    console.log(e);
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
