import express from "express";
import { Router } from "./router/routes";

const app = express();

app.use(express.json());

app.use("/api", Router);

export { app };
