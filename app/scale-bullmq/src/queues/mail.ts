import { Worker } from "bullmq";
import { sendMail } from "../lib/sendMail";

const emailWorker = new Worker(
  "email-queue",
  async (job) => {
    const data = job.data;

    await sendMail({
      from: data.from,
      to: data.to,
      sub: data.sub,
    });
  },
  {
    connection: {
      host: 'localhost',
      port: 6379,
    },
  }
);

export default emailWorker;
