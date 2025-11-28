/**
 * console.groupEnd – closes the most recent group and returns to the parent level.
 */
(() => {
  console.group("outer");
  console.group("inner");
  console.log("deep log");
  console.groupEnd();
  console.log("back to outer");
  console.groupEnd();

  console.group("single level");
  console.log("only one log");
  console.groupEnd();
})();

