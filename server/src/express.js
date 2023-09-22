import express from "express";
import { planetsRouter } from "../routes/planets/planets.router.js";
import cors from "cors";
//Initializing app

const app = express();
app.use(
  cors({
    origin: "http://locahost:3000",
  })
);
app.use(express.json());

app.use("/planets", planetsRouter);
export default app;
