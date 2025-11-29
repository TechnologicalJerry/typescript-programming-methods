/**
 * console.time – start named timers to measure elapsed time.
 */
(() => {
  console.time("db-call");
  console.time("render-cycle");

  setTimeout(() => {
    console.timeEnd("db-call");
  }, 15);

  setTimeout(() => {
    console.timeEnd("render-cycle");
  }, 25);
})();

