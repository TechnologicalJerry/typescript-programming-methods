/**
 * Record<K, T> – constructs type with keys K and value type T.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  const scoreByUser: Record<string, number> = { Ada: 99, Grace: 95 };
    const featureFlags: Record<"beta" | "darkMode", boolean> = { beta: true, darkMode: false };
    logTypeExample("Record<string, number>", scoreByUser);
    logTypeExample("Record<'beta'|'darkMode', boolean>", featureFlags);
})();
