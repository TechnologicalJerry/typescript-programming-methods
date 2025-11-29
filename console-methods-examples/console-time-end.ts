/**
 * console.timeEnd – stop timers started with console.time and log duration.
 */
(() => {
  console.time("api");
  setTimeout(() => {
    console.timeEnd("api");
  }, 10);

  console.time("batch");
  setTimeout(() => {
    console.timeEnd("batch");
  }, 30);
})();

