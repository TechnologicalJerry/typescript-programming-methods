/**
 * console.log – general-purpose logging with formatting tokens.
 */
(() => {
  console.log("log -> basic message", { language: "TypeScript" });
  console.log("log -> formatted %s %d", "version", 5);
  console.log("log -> multiple values", "TS", { typed: true }, [1, 2, 3]);
})();

