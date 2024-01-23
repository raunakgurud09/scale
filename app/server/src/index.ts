import { app } from "./app";

const PORT = process.env.PORT || 8080;

function init() {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}...`);
  });
}

init();
