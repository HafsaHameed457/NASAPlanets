import { planets } from "../../models/planets.model.js";
const getAllPlanets = (req, res) => {
  res.status(200).send("Trying to get planets wait...");
};
console.log(planets);
export { getAllPlanets };
