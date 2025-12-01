import { logPromiseExample, simulateAsync } from "./shared";

/**
 * Promise.any – fulfills with the first successful promise (AggregateError if all fail).
 */
(async () => {
  const winner = await Promise.any([simulateAsync("late success", 30), simulateAsync("early success", 5)]);
  logPromiseExample("Promise.any", "first fulfillment wins", winner);

  try {
    await Promise.any([simulateAsync("fail 1", 5, true), simulateAsync("fail 2", 10, true)]);
  } catch (error) {
    const aggregate = error as AggregateError;
    logPromiseExample("Promise.any", "all rejected", aggregate.errors.length);
  }

  const fallback = await Promise.any([
    simulateAsync("fail-fast", 5, true),
    simulateAsync("success", 25),
    simulateAsync("backup", 15),
  ]);
  logPromiseExample("Promise.any", "later success used", fallback);
})();

