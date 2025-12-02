/**
 * Exclude<T, U> – removes union members assignable to U.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  type Status = "loading" | "ready" | "error";
    type NonErrorStatus = Exclude<Status, "error">;
    const state: NonErrorStatus = "ready";
    type NumericOrString = Exclude<string | number | boolean, boolean>;
    const sample: NumericOrString = 42;
    logTypeExample("Exclude status", state);
    logTypeExample("Exclude types", sample);
})();
