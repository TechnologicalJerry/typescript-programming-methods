/**
 * ReadonlyArray<T> – immutable array type.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  const ids: ReadonlyArray<number> = [1, 2, 3];
    // @ts-expect-error
    ids.push(4);
    const names: ReadonlyArray<string> = ["Ada", "Grace"];
    logTypeExample("ReadonlyArray<number>", ids);
    logTypeExample("ReadonlyArray<string>", names);
})();
