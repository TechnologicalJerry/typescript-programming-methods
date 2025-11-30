/**
 * Number.parseFloat (alias global parseFloat) – parses decimals from strings.
 */

const logNumberExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logNumberExample("parseFloat", "extract float", Number.parseFloat("42.77px"));
    logNumberExample("parseFloat", "fails with invalid", Number.parseFloat("abc"));
})();
