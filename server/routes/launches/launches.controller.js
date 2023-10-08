import {
  getAllLaunches,
  addNewLaunch,
  existsLaunchwithID,
  abortLaunchById,
} from "../../models/launches.model.js";
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
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Date Format",
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
};
const httpAbortLaunch = (req, res) => {
  const launchId = Number(req.params.id);
  if (!existsLaunchwithID(launchId)) {
    return res.status(404).json({
      error: "Launch Not Found",
    });
  }
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
};
export { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
