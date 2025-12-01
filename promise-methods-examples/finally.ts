import { logPromiseExample, simulateAsync } from "./shared";

/**
 * finally – runs after settle regardless of outcome (ideal for cleanup).
 */
(async () => {
  await simulateAsync("cleanup target")
    .finally(() => logPromiseExample("finally", "after success", "cleanup done"))
    .then((value) => logPromiseExample("finally", "value preserved", value));

  await simulateAsync("should explode", 5, true)
    .finally(() => logPromiseExample("finally", "after failure", "still runs"))
    .catch((error) => logPromiseExample("finally", "error preserved", (error as Error).message));

  await simulateAsync("resource", 5, true)
    .catch(() => Promise.reject("secondary failure"))
    .finally(() => logPromiseExample("finally", "runs even after rethrow", "cleanup executed"))
    .catch((error) => logPromiseExample("finally", "rethrow capture", error));
})();

