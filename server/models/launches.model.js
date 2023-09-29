const launches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  missionName: "Kepler Exploration",
  rocket: "Explorer IS1",
  launchDate: new Date("27 December 2023"),
  destination: "Kepler-442 b",
  customer: ["Hafsa", "Irsa"],
  upcoming: true,
  success: true,
};
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  Array.from(launches.values());
}
function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      success: true,
      upcoming: true,
      customer: ["Hafsa", "Irsa"],
    })
  );
}
export { getAllLaunches, addNewLaunch };
