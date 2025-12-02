/**
 * unknown – safer top-type; must narrow before use.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  const value: unknown = JSON.parse('{"id":10}');
    if (typeof value === "object" && value !== null && "id" in value) {
      logTypeExample("unknown narrowed", (value as { id: number }).id);
    }
    const uncertain: unknown = "maybe string";
    if (typeof uncertain === "string") {
      logTypeExample("unknown string length", uncertain.length);
    }
})();
