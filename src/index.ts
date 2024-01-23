import express from "express";
import { mainRouter } from "./router/routes";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

function init() {
  app.use(mainRouter);

  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}...`);
  });
}

init();
