import { logPromiseExample, simulateAsync } from "./shared";

/**
 * Promise.allSettled – waits for every promise and reports status/value pairs.
 */
(async () => {
  const mixed = await Promise.allSettled([simulateAsync(1), simulateAsync("oops", 5, true)]);
  logPromiseExample("Promise.allSettled", "mixed results", mixed);

  const allGood = await Promise.allSettled([simulateAsync("x"), simulateAsync("y")]);
  logPromiseExample("Promise.allSettled", "all fulfilled", allGood);

  const filteredValues = (await Promise.allSettled([simulateAsync(5), simulateAsync(9, 5, true)]))
    .filter((entry): entry is PromiseFulfilledResult<number> => entry.status === "fulfilled")
    .map((entry) => entry.value);
  logPromiseExample("Promise.allSettled", "only fulfilled values", filteredValues);
})();

