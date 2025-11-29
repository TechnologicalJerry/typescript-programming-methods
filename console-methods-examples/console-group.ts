/**
 * console.group – create an indented logging block for related messages.
 */
(() => {
  console.group("user actions");
  console.log("clicked button");
  console.log("submitted form");
  console.groupEnd();

  console.group("nested batch job");
  console.group("nested inner");
  console.log("processing");
  console.groupEnd();
  console.groupEnd();
})();

