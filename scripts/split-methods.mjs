import { promises as fs } from "fs";
import path from "path";

const root = process.cwd();

const blockRegex =
  /\/\/\s*([^\n:]+?)\s*:\s*([^\n]+)\n\(\(\)\s*=>\s*\{\s*\n?([\s\S]*?)\n\}\)\(\);\s*/g;

const standardConfigs = [
  {
    source: "array-methods.ts",
    outDir: "array-methods-examples",
    definitions: [
      { key: "sampleNumbers", code: 'const sampleNumbers = [1, 2, 3, 4, 5];' },
      {
        key: "sampleWords",
        code: 'const sampleWords = ["alpha", "beta", "gamma", "delta"];',
      },
      {
        key: "nestedNumbers",
        code: "const nestedNumbers = [[1, 2], [3, 4], [5, 6]];",
      },
      {
        key: "deepNestedNumbers",
        code: "const deepNestedNumbers = [1, [2, [3, [4]]]];",
      },
      {
        key: "samplePeople",
        code: `const samplePeople = [
  { id: 1, name: "Ada", active: true, scores: [95, 88] },
  { id: 2, name: "Grace", active: false, scores: [70, 82] },
  { id: 3, name: "Linus", active: true, scores: [91, 96] },
];`,
      },
      {
        key: "logExample",
        code:
          'const logExample = (method: string, scenario: string, result: unknown) => {\n  console.log(`${method} -> ${scenario}:`, result);\n};',
      },
    ],
  },
  {
    source: "string-methods.ts",
    outDir: "string-methods-examples",
    definitions: [
      {
        key: "headline",
        code: 'const headline = "TypeScript empowers typed JavaScript";',
      },
      {
        key: "tagline",
        code: 'const tagline = "Learning TS is fun and productive";',
      },
      {
        key: "padded",
        code: 'const padded = "   surrounded by spaces   ";',
      },
      { key: "csvLine", code: 'const csvLine = "Ada,Grace,Linus,Ada";' },
      {
        key: "multiSentence",
        code: 'const multiSentence = "regex ROCKS. Regex helps validate data.";',
      },
      {
        key: "logStringExample",
        code:
          'const logStringExample = (method: string, scenario: string, result: unknown) => {\n  console.log(`${method} -> ${scenario}:`, result);\n};',
      },
    ],
  },
  {
    source: "object-methods.ts",
    outDir: "object-methods-examples",
    definitions: [
      {
        key: "User",
        code: `/**
 * Helper type declarations reused across object examples.
 */
type User = {
  id: number;
  name: string;
  role?: string;
  active?: boolean;
};`,
      },
      {
        key: "templateUser",
        code:
          'const templateUser = { id: 1, name: "Ada", role: "architect", active: true };',
      },
      {
        key: "overrides",
        code: 'const overrides = { role: "mentor", location: "London" };',
      },
      {
        key: "logObjectExample",
        code:
          'const logObjectExample = (method: string, scenario: string, result: unknown) => {\n  console.log(`${method} -> ${scenario}:`, result);\n};',
      },
    ],
  },
  {
    source: "number-methods.ts",
    outDir: "number-methods-examples",
    definitions: [
      { key: "floatValue", code: "const floatValue = 1234.56789;" },
      { key: "negativeValue", code: "const negativeValue = -42.3;" },
      {
        key: "logNumberExample",
        code:
          'const logNumberExample = (method: string, scenario: string, result: unknown) => {\n  console.log(`${method} -> ${scenario}:`, result);\n};',
      },
    ],
  },
  {
    source: "math-methods.ts",
    outDir: "math-methods-examples",
    definitions: [
      { key: "mathNumbers", code: "const mathNumbers = [-7.8, -0.2, 0, 1.5, 9.9];" },
      {
        key: "anglesRadians",
        code: "const anglesRadians = [0, Math.PI / 6, Math.PI / 4];",
      },
      { key: "negativeValue", code: "const negativeValue = -42.3;" },
      {
        key: "logMathExample",
        code:
          'const logMathExample = (method: string, scenario: string, result: unknown) => {\n  console.log(`${method} -> ${scenario}:`, result);\n};',
      },
    ],
  },
  {
    source: "date-methods.ts",
    outDir: "date-methods-examples",
    definitions: [
      {
        key: "baseDate",
        code: 'const baseDate = new Date("2025-01-15T10:20:30.400Z");',
      },
      {
        key: "logDateExample",
        code:
          'const logDateExample = (method: string, scenario: string, result: unknown) => {\n  console.log(`${method} -> ${scenario}:`, result);\n};',
      },
    ],
  },
  {
    source: "json-methods.ts",
    outDir: "json-methods-examples",
    definitions: [
      {
        key: "userJson",
        code: 'const userJson = \'{"id":1,"name":"Ada","skills":["TS","Node"],"active":true}\';',
      },
      {
        key: "complexObject",
        code: `const complexObject = {
  id: 2,
  createdAt: new Date("2025-05-01T12:00:00Z"),
  score: 98.5,
  tags: ["reference", "example"],
};`,
      },
      {
        key: "logJsonExample",
        code:
          'const logJsonExample = (method: string, scenario: string, result: unknown) => {\n  console.log(`${method} -> ${scenario}:`, result);\n};',
      },
    ],
  },
  {
    source: "ts-utility-types.ts",
    outDir: "ts-utility-types-examples",
    definitions: [
      {
        key: "UserProfile",
        code: `type UserProfile = {
  id: number;
  name: string;
  email: string;
  phone?: string;
};`,
      },
      {
        key: "ApiResponse",
        code: `type ApiResponse = {
  data: string;
  error?: string;
};`,
      },
      {
        key: "logTypeExample",
        code:
          'const logTypeExample = (label: string, value: unknown) => {\n  console.log(`${label}:`, value);\n};',
      },
    ],
  },
];

const slugify = (name) =>
  name
    .replace(/[<>]/g, "")
    .replace(/[.]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/-+/g, "-")
    .toLowerCase();

const trimCode = (code) => code.replace(/\s+$/, "");

const normalizeIndent = (code) => {
  const lines = code.split("\n");
  const indents = lines
    .filter((line) => line.trim().length)
    .map((line) => line.match(/^\s*/)[0].length);
  const minIndent = indents.length ? Math.min(...indents) : 0;
  return lines.map((line) => line.slice(minIndent)).join("\n");
};

const indentCode = (code) =>
  code
    .split("\n")
    .map((line) => (line.length ? `  ${line}` : ""))
    .join("\n");

const buildDefinitions = (definitions, code) => {
  return definitions
    .filter((def) => def.always || code.includes(def.key))
    .map((def) => def.code)
    .join("\n\n");
};

async function splitStandardFile(config) {
  const sourcePath = path.join(root, config.source);
  const source = await fs.readFile(sourcePath, "utf8");
  const matches = [...source.matchAll(blockRegex)];

  if (!matches.length) {
    throw new Error(`No matches found for ${config.source}`);
  }

  const outDir = path.join(root, config.outDir);
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  for (const match of matches) {
    const methodName = match[1].trim();
    const description = match[2].trim();
    const innerCode = trimCode(match[3]);
    const normalizedCode = normalizeIndent(innerCode);
    const definitions = buildDefinitions(config.definitions ?? [], innerCode);
    const docComment = `/**\n * ${methodName} – ${description}\n */`;
    const block = `(() => {\n${indentCode(normalizedCode)}\n})();\n`;
    const parts = [docComment];
    if (definitions) {
      parts.push(definitions);
    }
    parts.push(block);
    const content = parts.join("\n\n");

    const filename = `${slugify(methodName)}.ts`;
    await fs.writeFile(path.join(outDir, filename), content, "utf8");
  }
}

async function main() {
  for (const config of standardConfigs) {
    await splitStandardFile(config);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

