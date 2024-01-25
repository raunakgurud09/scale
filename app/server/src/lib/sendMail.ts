import shared from "shared";
// import { sleep } from "../utils/sleep";

export const sendMail = async ({
  from,
  to,
  sub,
}: {
  from: string;
  to: string;
  sub: string;
}) => {
  // Waiting to send mail mock time
  await sleep(2 * 1000);
};
