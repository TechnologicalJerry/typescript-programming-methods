/**
 * Math.sin – sine (expects radians).
 */

const anglesRadians = [0, Math.PI / 6, Math.PI / 4];

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("sin", "0 rad", Math.sin(anglesRadians[0]));
    logMathExample("sin", "π/6 rad", Math.sin(anglesRadians[1]));
})();
