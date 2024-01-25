function init() {
  console.log("listening to email-queue");
  const emailWorker = require("./queues/mail");
}

init();
