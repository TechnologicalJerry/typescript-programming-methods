/**
 * Optional properties – propertyName?: Type adds undefined automatically.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  type OptionalSettings = {
      retries?: number;
      timeout?: number;
    };
    const defaultSettings: OptionalSettings = {};
    const customSettings: OptionalSettings = { retries: 3, timeout: 5000 };
    logTypeExample("Optional default", defaultSettings);
    logTypeExample("Optional custom", customSettings);
})();
