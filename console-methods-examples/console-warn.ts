/**
 * console.warn – flag non-fatal issues and deprecated flows.
 */
(() => {
  console.warn("warn -> deprecated API in use");
  console.warn("warn -> configuration missing fallback");
  console.warn("warn -> approaching quota limit", { usage: 0.92 });
})();

