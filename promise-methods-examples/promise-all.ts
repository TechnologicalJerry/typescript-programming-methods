import { logPromiseExample, simulateAsync } from "./shared";

/**
 * Promise.all – waits for all promises to fulfill or rejects on the first error.
 */
(async () => {
  const combined = await Promise.all([simulateAsync("A", 5), simulateAsync("B", 10)]);
  logPromiseExample("Promise.all", "combined results", combined);

  try {
    await Promise.all([simulateAsync("ok", 5), simulateAsync("boom", 5, true)]);
  } catch (error) {
    logPromiseExample("Promise.all", "rejection short-circuits", (error as Error).message);
  }

  const numericTotal = (
    await Promise.all([simulateAsync(10, 5), simulateAsync(20, 5), simulateAsync(5, 5)])
  ).reduce((sum, value) => sum + value, 0);
  logPromiseExample("Promise.all", "sum numbers", numericTotal);
})();

