# TypeScript Programming Methods Reference

This repository is a runnable cookbook covering TypeScript/JavaScript language features and standard library methods. Every concept lives in its own focused file so you can run, tweak, and learn quickly.

## Directory Map

- `array-methods.ts`, `string-methods.ts`, etc. – master source files that hold every example for a category. Update these when you want to change shared data or explanations.
- `*-methods-examples/` – auto-generated folders containing **one `.ts` file per API**. Counts match the table below.
- `promise-methods-examples/` and `console-methods-examples/` – handcrafted per-method demos (Promises need async helpers and console methods are browser/node specific).
- `ts-core-concepts.ts`, `ts-utility-types.ts` – TypeScript-only topics like utility types, decorators, generics, etc.
- `scripts/split-methods.mjs` – generator that converts the master files into the per-method folders.

## Example Counts

| Category                 | Count | Location                         |
| ------------------------ | ----- | -------------------------------- |
| Array Methods            | 29    | `array-methods-examples/`        |
| String Methods           | 25    | `string-methods-examples/`       |
| Object Methods           | 13    | `object-methods-examples/`       |
| Number Methods           | 9     | `number-methods-examples/`       |
| Math Methods             | 18    | `math-methods-examples/`         |
| Date Methods             | 21    | `date-methods-examples/`         |
| JSON Methods             | 2     | `json-methods-examples/`         |
| Promise Methods          | 9     | `promise-methods-examples/`      |
| Console Methods          | 11    | `console-methods-examples/`      |
| TypeScript Utility Types | 23    | `ts-utility-types-examples/`     |

## Running the Examples

Use `ts-node` or compile with `tsc` + `node`:

```bash
npx ts-node array-methods-examples/map.ts
```

Each file prints multiple scenarios to the console so you can see the method behavior immediately.

## Regenerating Per-Method Files

When you edit any master file (`array-methods.ts`, `string-methods.ts`, etc.), rerun the generator to refresh every per-method file:

```bash
node scripts/split-methods.mjs
```

The script:
1. Reads each master file.
2. Extracts every annotated block (e.g., `// map: ...`).
3. Writes one `.ts` file per block into the corresponding `*-examples` directory.

> **Note:** Promise/console folders are maintained manually because they require shared helpers or host-specific behavior.

## Conventions

- All examples use simple datasets (`sampleNumbers`, `samplePeople`, etc.) kept near the top of each file.
- Comments explain non-obvious logic; redundant comments are avoided.
- Files stick to ASCII characters and `tsconfig` defaults.

Happy learning! Feel free to extend the master files and regenerate to keep the per-method references in sync.