/**
 * Math.tan – tangent.
 */

const anglesRadians = [0, Math.PI / 6, Math.PI / 4];

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("tan", "0 rad", Math.tan(anglesRadians[0]));
    logMathExample("tan", "π/4 rad", Math.tan(anglesRadians[2]));
})();
