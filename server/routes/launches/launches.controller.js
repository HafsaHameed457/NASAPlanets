import { getAllLaunches, addNewLaunch } from "../../models/launches.model.js";
const httpGetAllLaunches = (req, res) => {
  return res.status(200).json(getAllLaunches());
};
const httpAddNewLaunch = (req, res) => {
  const launch = req.body;

  if (
    !launch.missionName ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  addNewLaunch(launch);
  return res.status(201).json(launch);
};

export { httpGetAllLaunches, httpAddNewLaunch };
