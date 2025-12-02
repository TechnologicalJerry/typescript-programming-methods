/**
 * Extract<T, U> – keeps union members assignable to U.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  type SuccessState = Extract<"loading" | "ready" | "error", "ready" | "success">;
    const ready: SuccessState = "ready";
    type NumberLike = Extract<string | number | bigint, number | bigint>;
    const bigNumber: NumberLike = 10n;
    logTypeExample("Extract states", ready);
    logTypeExample("Extract numeric types", bigNumber);
})();
