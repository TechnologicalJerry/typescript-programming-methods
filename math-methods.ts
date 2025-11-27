/**
 * Math namespace utilities with quick explanations and usage samples.
 */

const mathNumbers = [-7.8, -0.2, 0, 1.5, 9.9];
const anglesRadians = [0, Math.PI / 6, Math.PI / 4];

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

// Math.abs: absolute value.
(() => {
  logMathExample("abs", "positive result", Math.abs(mathNumbers[0]));
  logMathExample("abs", "zero remains zero", Math.abs(0));
})();

// Math.ceil: smallest integer >= number.
(() => {
  logMathExample("ceil", "ceil -7.8", Math.ceil(mathNumbers[0]));
  logMathExample("ceil", "ceil 1.5", Math.ceil(1.5));
})();

// Math.floor: largest integer <= number.
(() => {
  logMathExample("floor", "floor -0.2", Math.floor(mathNumbers[1]));
  logMathExample("floor", "floor 9.9", Math.floor(9.9));
})();

// Math.round: nearest integer (halves go up for positive numbers).
(() => {
  logMathExample("round", "round 1.5", Math.round(1.5));
  logMathExample("round", "round -1.5", Math.round(-1.5));
})();

// Math.trunc: drop fractional part toward zero.
(() => {
  logMathExample("trunc", "trunc 9.9", Math.trunc(9.9));
  logMathExample("trunc", "trunc -7.8", Math.trunc(-7.8));
})();

// Math.max: largest value in arguments.
(() => {
  logMathExample("max", "spread array", Math.max(...mathNumbers));
  logMathExample("max", "direct values", Math.max(10, -5, 22));
})();

// Math.min: smallest value.
(() => {
  logMathExample("min", "spread array", Math.min(...mathNumbers));
  logMathExample("min", "direct values", Math.min(10, -5, 22));
})();

// Math.pow: exponentiation (base^exponent). Prefer ** operator in modern JS.
(() => {
  logMathExample("pow", "3^4", Math.pow(3, 4));
  logMathExample("pow", "fractional exponents", Math.pow(16, 0.5));
})();

// Math.sqrt: square root (same as Math.pow(x, 0.5)).
(() => {
  logMathExample("sqrt", "sqrt 81", Math.sqrt(81));
  logMathExample("sqrt", "sqrt 2", Math.sqrt(2));
})();

// Math.random: pseudo-random number [0, 1).
(() => {
  logMathExample("random", "default range", Math.random());
  logMathExample("random", "integer 0-9", Math.floor(Math.random() * 10));
})();

// Math.sin: sine (expects radians).
(() => {
  logMathExample("sin", "0 rad", Math.sin(anglesRadians[0]));
  logMathExample("sin", "π/6 rad", Math.sin(anglesRadians[1]));
})();

// Math.cos: cosine.
(() => {
  logMathExample("cos", "0 rad", Math.cos(anglesRadians[0]));
  logMathExample("cos", "π/4 rad", Math.cos(anglesRadians[2]));
})();

// Math.tan: tangent.
(() => {
  logMathExample("tan", "0 rad", Math.tan(anglesRadians[0]));
  logMathExample("tan", "π/4 rad", Math.tan(anglesRadians[2]));
})();

// Math.log: natural logarithm (base e).
(() => {
  logMathExample("log", "ln 1", Math.log(1));
  logMathExample("log", "ln e^2", Math.log(Math.exp(2)));
})();

// Math.log2: base-2 logarithm.
(() => {
  logMathExample("log2", "log2 8", Math.log2(8));
  logMathExample("log2", "log2 1", Math.log2(1));
})();

// Math.log10: base-10 logarithm.
(() => {
  logMathExample("log10", "log10 1000", Math.log10(1000));
  logMathExample("log10", "log10 5", Math.log10(5));
})();

// Math.exp: e raised to argument.
(() => {
  logMathExample("exp", "e^1", Math.exp(1));
  logMathExample("exp", "e^3", Math.exp(3));
})();

// Math.sign: indicates sign (-1, 0, 1, -0).
(() => {
  logMathExample("sign", "negative value", Math.sign(negativeValue));
  logMathExample("sign", "positive value", Math.sign(15));
})();

