/**
 * Union types – combine multiple possibilities.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  type Id = number | string;
    const numericId: Id = 5;
    const stringId: Id = "user-5";
    logTypeExample("Union numeric", numericId);
    logTypeExample("Union string", stringId);
})();
