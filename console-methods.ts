/**
 * Console API usage samples. Running this file will generate log output that
 * highlights how each method behaves.
 */

// console.log: general-purpose logging.
console.log("log -> basic message", { language: "TypeScript" });
console.log("log -> formatted %s %d", "version", 5);

// console.error: intended for errors.
console.error("error -> something went wrong", new Error("Demo error"));
console.error("error -> string message", "Could not load data");

// console.warn: non-fatal issues.
console.warn("warn -> deprecated API");
console.warn("warn -> configuration missing fallback");

// console.table: tabular visualization of array/object data.
console.table([
  { id: 1, name: "Ada" },
  { id: 2, name: "Grace" },
]);
console.table({ server: "api-1", status: "online", latency: 42 });

// console.assert: logs only when assertion is false.
console.assert(1 === 1, "assert -> will not show");
console.assert(1 === 2, "assert -> expression failed");

// console.clear: clears the console (support varies by host).
console.log("clear -> about to clear console");
console.clear();
console.log("clear -> console has been cleared");

// console.count: counts named occurrences.
console.count("fetch");
console.count("fetch");
console.count("render");
console.count("fetch");

// console.time / console.timeEnd: measures elapsed time between calls.
console.time("db-call");
setTimeout(() => {
  console.timeEnd("db-call");

  // console.group / console.groupEnd: nested logging contexts.
  console.group("group -> user actions");
  console.log("group item -> clicked button");
  console.log("group item -> submitted form");
  console.groupEnd();

  console.group("nested group -> batch job");
  console.group("nested inner");
  console.log("group item -> processing");
  console.groupEnd();
  console.groupEnd();
}, 10);

