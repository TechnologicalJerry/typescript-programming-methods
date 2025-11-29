/**
 * console.table – display tabular data for arrays or objects.
 */
(() => {
  console.table([
    { id: 1, name: "Ada" },
    { id: 2, name: "Grace" },
  ]);

  console.table({ server: "api-1", status: "online", latency: 42 });

  console.table(
    [
      { stage: "build", ms: 1200 },
      { stage: "test", ms: 3400 },
      { stage: "deploy", ms: 980 },
    ],
    ["stage", "ms"]
  );
})();

