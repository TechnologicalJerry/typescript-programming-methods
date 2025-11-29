/**
 * Math.cos – cosine.
 */

const anglesRadians = [0, Math.PI / 6, Math.PI / 4];

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("cos", "0 rad", Math.cos(anglesRadians[0]));
    logMathExample("cos", "π/4 rad", Math.cos(anglesRadians[2]));
})();
