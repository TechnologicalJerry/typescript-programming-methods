import { logPromiseExample, simulateAsync } from "./shared";

/**
 * catch – handle rejection by returning a fallback or throwing a new error.
 */
(async () => {
  await simulateAsync("fail-fast", 10, true).catch((error) =>
    logPromiseExample("catch", "handle rejection", (error as Error).message)
  );

  await simulateAsync("secondary error", 5, true)
    .catch(() => "fallback value")
    .then((value) => logPromiseExample("catch", "recover with fallback", value));

  await simulateAsync("needs format", 5, true)
    .catch((error) => {
      throw new Error(`wrapped: ${(error as Error).message}`);
    })
    .catch((error) => logPromiseExample("catch", "wrapped error", (error as Error).message));
})();

