//Imports

import dotenv from "dotenv";
import http from "http";
import app from "./express.js";
import { loadPlanets } from "../models/planets.model.js";
//For accessing env variables
dotenv.config();

//Getting env variables
const PORT = process.env.PORT || 8000;

// //creating server using http and passing express app in it
const server = http.createServer(app);
async function StartServer() {
  await loadPlanets();
  server.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

StartServer();
