/**
 * never – indicates impossible code paths or exhaustiveness checking.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  function exhaustive(value: "a" | "b"): string {
      switch (value) {
        case "a":
          return "A";
        case "b":
          return "B";
        default: {
          const _exhaustive: never = value;
          return _exhaustive;
        }
      }
    }
    logTypeExample("never", exhaustive("a"));
    logTypeExample("never", exhaustive("b"));
})();
