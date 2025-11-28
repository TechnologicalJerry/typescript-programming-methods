/**
 * console.error – emit errors or stack traces for failures.
 */
(() => {
  console.error("error -> something went wrong", new Error("Demo error"));
  console.error("error -> string message", "Could not load data");
  try {
    JSON.parse("{bad json}");
  } catch (error) {
    console.error("error -> parse failure", error);
  }
})();

