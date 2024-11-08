import { parse } from "csv-parse";
import fs from "fs";
let planets = [];

function isHabitatable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream("../server/data/kepler_data.csv")
      .pipe(parse({ comment: "#", columns: true }))
      .on("data", (data) => {
        if (isHabitatable(data)) {
          planets.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        resolve();
      });
  });
}
function getAllPlanets() {
  return planets;
}

export { loadPlanets, getAllPlanets };
