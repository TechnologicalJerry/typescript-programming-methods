import { logPromiseExample, simulateAsync } from "./shared";

/**
 * Promise.race – settles with the first promise to resolve or reject.
 */
(async () => {
  const fastest = await Promise.race([simulateAsync("slow", 40), simulateAsync("fast", 10)]);
  logPromiseExample("Promise.race", "fastest fulfillment", fastest);

  try {
    await Promise.race([simulateAsync("error wins", 5, true), simulateAsync("slow success", 50)]);
  } catch (error) {
    logPromiseExample("Promise.race", "fast rejection", (error as Error).message);
  }

  const randomWinner = await Promise.race([
    simulateAsync("first", Math.random() * 20),
    simulateAsync("second", Math.random() * 20),
  ]);
  logPromiseExample("Promise.race", "random winner", randomWinner);
})();

