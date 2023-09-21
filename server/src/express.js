import express from "express";
import { planetsRouter } from "../routes/planets/planets.router.js";

//Initializing app

const app = express();
app.use(express.json());

app.use("/planets", planetsRouter);
export default app;
