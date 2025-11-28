/**
 * console.assert – logs only when the expression is falsy.
 */
(() => {
  console.assert(1 === 1, "assert -> no output because expression true");
  console.assert(1 === 2, "assert -> expression failed");

  const isReady = false;
  console.assert(isReady, "assert -> system not ready");
})();

