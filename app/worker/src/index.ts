/* eslint-disable @typescript-eslint/no-var-requires */
function init() {
  console.log("listening to email-queue");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const emailWorker = require("./queues/mail");
}

init();
