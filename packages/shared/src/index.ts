export const sleep = (ms: number = 1000) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export type sleep = (ms: number) => Promise<void>
