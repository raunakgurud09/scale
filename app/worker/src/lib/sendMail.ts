import { sleep } from "@scale/shared";

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
  console.log(`email sent from: ${from} to: ${to}\n sub:${sub}`);
  await sleep(2 * 1000);
};
