import { getAllLaunches, addNewLaunch } from "../../models/launches.model.js";
const httpGetAllLaunches = (req, res) => {
  console.log(launches);
  res.status(200).json(getAllLaunches());
};
export { httpGetAllLaunches };
