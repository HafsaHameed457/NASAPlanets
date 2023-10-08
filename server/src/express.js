import express from "express";
import { planetsRouter } from "../routes/planets/planets.router.js";
import { launchesRouter } from "../routes/launches/launches.router.js";
import path from "path";
import cors from "cors";
//Initializing app

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.static("../server/public"));

app.use("/planets", planetsRouter);
app.use("/launch", launchesRouter);
app.use("/upcoming", launchesRouter);

app.get("/", (req, res) => {
  res.sendFile("../server/public/index.html");
});
export default app;
