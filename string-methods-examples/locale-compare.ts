/**
 * localeCompare – compares strings using locale rules.
 */

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("localeCompare", "compare alpha vs beta", "alpha".localeCompare("beta"));
    logStringExample("localeCompare", "case insensitive via locale", "résumé".localeCompare("resume", "en", { sensitivity: "base" }));
})();
