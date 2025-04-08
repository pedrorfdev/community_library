import "dotenv/config.js";
import express from "express";
import { routers } from "./src/routes/index.js";
import "./src/service/cron.services.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routers);

app.listen(port, () => console.log(`Server running on port ${port}`));
