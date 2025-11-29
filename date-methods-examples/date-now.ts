/**
 * Date.now – milliseconds since Unix epoch.
 */

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("now", "current timestamp", Date.now());
    logDateExample("now", "convert to Date", new Date(Date.now()).toISOString());
})();
