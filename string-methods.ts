/**
 * String methods showcase with explanations and 2+ examples each.
 */

const headline = "TypeScript empowers typed JavaScript";
const tagline = "Learning TS is fun and productive";
const padded = "   surrounded by spaces   ";
const csvLine = "Ada,Grace,Linus,Ada";
const multiSentence = "regex ROCKS. Regex helps validate data.";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

// charAt: returns the character at a zero-based index.
(() => {
  logStringExample("charAt", "first character", headline.charAt(0));
  logStringExample("charAt", "character at position 10", headline.charAt(10));
})();

// charCodeAt: gives the UTF-16 code unit at an index.
(() => {
  logStringExample("charCodeAt", "code of T", headline.charCodeAt(0));
  logStringExample("charCodeAt", "code at index 5", headline.charCodeAt(5));
})();

// concat: joins strings without touching originals.
(() => {
  logStringExample("concat", "headline + tagline", headline.concat(" — ", tagline));
  logStringExample("concat", "multiple segments", "".concat("TS ", "makes ", "types ", "work"));
})();

// includes: case-sensitive substring presence check.
(() => {
  logStringExample("includes", "has typed", headline.includes("typed"));
  logStringExample("includes", "missing word", headline.includes("python"));
})();

// endsWith: tests suffix.
(() => {
  logStringExample("endsWith", "ends with JavaScript", headline.endsWith("JavaScript"));
  logStringExample("endsWith", "ends with empowers", headline.endsWith("empowers"));
})();

// startsWith: tests prefix.
(() => {
  logStringExample("startsWith", "starts with Type", headline.startsWith("Type"));
  logStringExample("startsWith", "starts with script case-sensitive", headline.startsWith("script"));
})();

// indexOf: first occurrence index or -1.
(() => {
  logStringExample("indexOf", "first Ada", csvLine.indexOf("Ada"));
  logStringExample("indexOf", "search from position 5", csvLine.indexOf("Ada", 5));
})();

// lastIndexOf: last occurrence index or -1.
(() => {
  logStringExample("lastIndexOf", "last Ada", csvLine.lastIndexOf("Ada"));
  logStringExample("lastIndexOf", "search before index 10", csvLine.lastIndexOf("Ada", 10));
})();

// match: uses regex to return result array or null.
(() => {
  logStringExample("match", "words starting with T", headline.match(/\bT\w+/g));
  logStringExample("match", "digits search", tagline.match(/\d+/));
})();

// replace: swaps first match (string or regex).
(() => {
  logStringExample("replace", "replace JS with JavaScript", tagline.replace("TS", "TypeScript"));
  logStringExample("replace", "regex first match", multiSentence.replace(/regex/i, "Regex"));
})();

// replaceAll: replaces every match.
(() => {
  logStringExample("replaceAll", "all regex mentions", multiSentence.replaceAll(/regex/gi, "pattern"));
  logStringExample("replaceAll", "all commas with pipes", csvLine.replaceAll(",", " | "));
})();

// search: regex search returning first match index.
(() => {
  logStringExample("search", "first uppercase word", headline.search(/[A-Z][a-z]+/));
  logStringExample("search", "case-insensitive regex", multiSentence.search(/regex/i));
})();

// slice: extracts substring using start/end indexes.
(() => {
  logStringExample("slice", "word TypeScript", headline.slice(0, 10));
  logStringExample("slice", "last 10 chars", headline.slice(-10));
})();

// split: breaks string into array.
(() => {
  logStringExample("split", "CSV to array", csvLine.split(","));
  logStringExample("split", "limit to 2 parts", headline.split(" ", 2));
})();

// substring: similar to slice but swaps params if start>end and clamps negatives to 0.
(() => {
  logStringExample("substring", "characters 4-14", headline.substring(4, 14));
  logStringExample("substring", "swapped indexes 14-4", headline.substring(14, 4));
})();

// toLowerCase: converts to lower case using locale-insensitive rules.
(() => {
  logStringExample("toLowerCase", "headline lower", headline.toLowerCase());
  logStringExample("toLowerCase", "tagline lower", tagline.toLowerCase());
})();

// toUpperCase: uppercase transformation.
(() => {
  logStringExample("toUpperCase", "headline upper", headline.toUpperCase());
  logStringExample("toUpperCase", "tagline upper", tagline.toUpperCase());
})();

// trim: removes whitespace from both ends.
(() => {
  logStringExample("trim", "trimmed padded", padded.trim());
  logStringExample("trim", "trim already clean string", headline.trim());
})();

// trimStart: removes leading whitespace only.
(() => {
  logStringExample("trimStart", "remove leading", padded.trimStart());
  logStringExample("trimStart", "no change when no spaces", headline.trimStart());
})();

// trimEnd: removes trailing whitespace only.
(() => {
  logStringExample("trimEnd", "remove trailing", padded.trimEnd());
  logStringExample("trimEnd", "no change when no spaces", headline.trimEnd());
})();

// repeat: repeats string n times.
(() => {
  logStringExample("repeat", "repeat 3 times", "TS ".repeat(3));
  logStringExample("repeat", "repeat headline twice", headline.repeat(2));
})();

// padStart: pads string to length with filler at the start.
(() => {
  logStringExample("padStart", "pad id to 5 chars", "42".padStart(5, "0"));
  logStringExample("padStart", "pad word with spaces", "TS".padStart(6));
})();

// padEnd: pads at the end.
(() => {
  logStringExample("padEnd", "pad with zeros", "42".padEnd(5, "0"));
  logStringExample("padEnd", "pad with words", "TS".padEnd(8, "-lang"));
})();

// localeCompare: compares strings using locale rules.
(() => {
  logStringExample("localeCompare", "compare alpha vs beta", "alpha".localeCompare("beta"));
  logStringExample("localeCompare", "case insensitive via locale", "résumé".localeCompare("resume", "en", { sensitivity: "base" }));
})();

// valueOf: primitive string value of wrapper objects.
(() => {
  const wrapped = new String("wrapped text");
  logStringExample("valueOf", "primitive from wrapper", wrapped.valueOf());
  logStringExample("valueOf", "string literal unaffected", "inner".valueOf());
})();

