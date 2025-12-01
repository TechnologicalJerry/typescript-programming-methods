import { logPromiseExample, simulateAsync } from "./shared";

/**
 * Promise.resolve – wraps values (or thenables) into a fulfilled promise.
 */
(async () => {
  await Promise.resolve("immediate value").then((value) =>
    logPromiseExample("Promise.resolve", "string value", value)
  );

  await Promise.resolve(simulateAsync("flattened promise", 5)).then((value) =>
    logPromiseExample("Promise.resolve", "thenable unwrapped", value)
  );

  await Promise.resolve({ message: "static payload" }).then((value) =>
    logPromiseExample("Promise.resolve", "object passthrough", value)
  );
})();

