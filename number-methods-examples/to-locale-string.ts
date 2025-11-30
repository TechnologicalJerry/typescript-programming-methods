/**
 * toLocaleString – locale-aware formatting (digits, currency, etc.).
 */

const floatValue = 1234.56789;

const logNumberExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logNumberExample("toLocaleString", "US locale", floatValue.toLocaleString("en-US"));
    logNumberExample(
      "toLocaleString",
      "currency example",
      floatValue.toLocaleString("en-IN", { style: "currency", currency: "INR" })
    );
})();
