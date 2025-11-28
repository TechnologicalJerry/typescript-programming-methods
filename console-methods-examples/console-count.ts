/**
 * console.count – counts occurrences for the provided label.
 */
(() => {
  console.count("fetch");
  console.count("fetch");
  console.count("render");
  console.count("fetch");

  ["task", "task", "review"].forEach((label) => console.count(label));
})();

