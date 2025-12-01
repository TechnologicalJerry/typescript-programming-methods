/**
 * replaceAll – replaces every match.
 */

const csvLine = "Ada,Grace,Linus,Ada";

const multiSentence = "regex ROCKS. Regex helps validate data.";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("replaceAll", "all regex mentions", multiSentence.replaceAll(/regex/gi, "pattern"));
    logStringExample("replaceAll", "all commas with pipes", csvLine.replaceAll(",", " | "));
})();
