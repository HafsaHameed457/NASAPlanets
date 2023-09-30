import { getAllLaunches, addNewLaunch } from "../../models/launches.model.js";
const httpGetAllLaunches = (req, res) => {
  return res.status(200).json(getAllLaunches());
};
const httpAddNewLaunch = (req, res) => {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  addNewLaunch(launch);
  return res.status(201).json(launch);
};

export { httpGetAllLaunches, httpAddNewLaunch };
