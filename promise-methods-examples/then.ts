import { logPromiseExample, simulateAsync } from "./shared";

/**
 * then – handle fulfillment and optionally transform the value.
 */
(async () => {
  await simulateAsync("data").then((value) => logPromiseExample("then", "basic fulfillment", value));

  await simulateAsync(5)
    .then((value) => value * 2)
    .then((value) => logPromiseExample("then", "chained transform", value));

  await simulateAsync({ id: 1, name: "Ada" })
    .then((payload) => ({ ...payload, active: true }))
    .then((payload) => logPromiseExample("then", "enrich object", payload));
})();

