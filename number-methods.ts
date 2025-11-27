/**
 * Number helpers and global numeric utilities with examples.
 */

const floatValue = 1234.56789;
const negativeValue = -42.3;

const logNumberExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

// toFixed: formats number with fixed decimal places (string result).
(() => {
  logNumberExample("toFixed", "two decimals", floatValue.toFixed(2));
  logNumberExample("toFixed", "pad trailing zeros", (5).toFixed(3));
})();

// toPrecision: formats to specified significant digits.
(() => {
  logNumberExample("toPrecision", "3 significant digits", floatValue.toPrecision(3));
  logNumberExample("toPrecision", "switch to exponential", (0.0001234).toPrecision(2));
})();

// toLocaleString: locale-aware formatting (digits, currency, etc.).
(() => {
  logNumberExample("toLocaleString", "US locale", floatValue.toLocaleString("en-US"));
  logNumberExample(
    "toLocaleString",
    "currency example",
    floatValue.toLocaleString("en-IN", { style: "currency", currency: "INR" })
  );
})();

// valueOf: primitive numeric value (handy with Number wrappers).
(() => {
  const wrapped = new Number(99);
  logNumberExample("valueOf", "unwrap Number object", wrapped.valueOf());
  logNumberExample("valueOf", "primitive unaffected", (10).valueOf());
})();

// Number.isFinite: strict finite check (no coercion).
(() => {
  logNumberExample("isFinite", "finite float", Number.isFinite(floatValue));
  logNumberExample("isFinite", "Infinity check", Number.isFinite(Number.POSITIVE_INFINITY));
})();

// Number.isInteger: strict integer check.
(() => {
  logNumberExample("isInteger", "whole number", Number.isInteger(42));
  logNumberExample("isInteger", "float is false", Number.isInteger(floatValue));
})();

// Number.isNaN: true only for actual NaN (no coercion).
(() => {
  logNumberExample("isNaN", "NaN literal", Number.isNaN(Number("not-a-number")));
  logNumberExample("isNaN", "string not coerced", Number.isNaN("NaN"));
})();

// Number.parseFloat (alias global parseFloat): parses decimals from strings.
(() => {
  logNumberExample("parseFloat", "extract float", Number.parseFloat("42.77px"));
  logNumberExample("parseFloat", "fails with invalid", Number.parseFloat("abc"));
})();

// Number.parseInt: parses integers with optional radix.
(() => {
  logNumberExample("parseInt", "decimal default", Number.parseInt("101"));
  logNumberExample("parseInt", "binary radix", Number.parseInt("101", 2));
})();

