const launches = new Map();
const launch = {
  flightNumber: 100,
  missionName: "Kepler Exploration",
  rocket: "Explorer IS1",
  launchDate: new Date("27 December 2023"),
  destination: "Kepler-442 b",
  customer: ["Hafsa", "Irsa"],
  upcoming: true,
  success: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

export { launches };
