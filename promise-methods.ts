/**
 * Promise core methods with asynchronous demonstrations.
 */

const simulateAsync = <T>(value: T, delayMs = 30, shouldReject = false): Promise<T> =>
  new Promise<T>((resolve, reject) =>
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(typeof value === "string" ? value : "Rejected"));
      } else {
        resolve(value);
      }
    }, delayMs)
  );

const logPromiseExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(async () => {
  // then: handle fulfillment and optionally transform the value.
  await simulateAsync("data").then((value) => logPromiseExample("then", "basic fulfillment", value));
  await simulateAsync(5)
    .then((value) => value * 2)
    .then((value) => logPromiseExample("then", "chained transform", value));

  // catch: handle rejection by returning a fallback or throwing new error.
  await simulateAsync("fail-fast", 10, true).catch((error) => logPromiseExample("catch", "handle rejection", error.message));
  await simulateAsync("secondary error", 5, true)
    .catch(() => "fallback value")
    .then((value) => logPromiseExample("catch", "recover with fallback", value));

  // finally: runs after settle regardless of outcome.
  await simulateAsync("cleanup target")
    .finally(() => logPromiseExample("finally", "after success", "cleanup done"))
    .then((value) => logPromiseExample("finally", "value still available", value));
  await simulateAsync("should explode", 5, true)
    .finally(() => logPromiseExample("finally", "after failure", "still runs"))
    .catch((error) => logPromiseExample("finally", "error preserved", error.message));

  // Promise.all: waits for all to fulfill or rejects on first error.
  const allResult = await Promise.all([simulateAsync("A", 5), simulateAsync("B", 10)]);
  logPromiseExample("all", "combined results", allResult);

  try {
    await Promise.all([simulateAsync("ok", 5), simulateAsync("boom", 5, true)]);
  } catch (error) {
    logPromiseExample("all", "rejection short-circuits", (error as Error).message);
  }

  // Promise.allSettled: waits for every promise and reports status/value.
  const settled = await Promise.allSettled([simulateAsync(1), simulateAsync("oops", 5, true)]);
  logPromiseExample("allSettled", "mixed results", settled);

  const settledAllFulfilled = await Promise.allSettled([simulateAsync("x"), simulateAsync("y")]);
  logPromiseExample("allSettled", "all fulfilled", settledAllFulfilled);

  // Promise.race: resolves/rejects with the first settled promise.
  const fastest = await Promise.race([simulateAsync("slow", 40), simulateAsync("fast", 10)]);
  logPromiseExample("race", "fastest fulfillment", fastest);

  try {
    await Promise.race([simulateAsync("error wins", 5, true), simulateAsync("slow success", 50)]);
  } catch (error) {
    logPromiseExample("race", "fast rejection", (error as Error).message);
  }

  // Promise.resolve: creates/resolves with given value (including thenables).
  await Promise.resolve("immediate value").then((value) => logPromiseExample("resolve", "string value", value));
  await Promise.resolve(simulateAsync("flattened promise", 5)).then((value) =>
    logPromiseExample("resolve", "thenable unwrapped", value)
  );

  // Promise.reject: returns rejected promise with provided reason.
  await Promise.reject(new Error("manual failure")).catch((error) =>
    logPromiseExample("reject", "caught error", error.message)
  );
  await Promise.reject("string reason").catch((reason) => logPromiseExample("reject", "string reason", reason));

  // Promise.any: fulfills with first successful promise; rejects AggregateError if all fail.
  const anyResult = await Promise.any([simulateAsync("late success", 30), simulateAsync("early success", 5)]);
  logPromiseExample("any", "first fulfillment wins", anyResult);

  try {
    await Promise.any([simulateAsync("fail 1", 5, true), simulateAsync("fail 2", 10, true)]);
  } catch (error) {
    logPromiseExample("any", "all rejected aggregate", (error as AggregateError).errors.length);
  }
})();

