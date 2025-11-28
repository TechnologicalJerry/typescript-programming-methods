/**
 * reverse – flips array order in place.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const reversedNumbers = [...sampleNumbers].reverse();
    logExample("reverse", "numbers reversed", reversedNumbers);
  
    const reversedWords = [...sampleWords].reverse();
    logExample("reverse", "words reversed", reversedWords);
})();
