/**
 * ConstructorParameters<T> – tuple of constructor arguments.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  class Service {
      constructor(public name: string, public url: string) {}
    }
    type ServiceArgs = ConstructorParameters<typeof Service>;
    const config: ServiceArgs = ["Auth", "https://api.example.com"];
    const instance = new Service(...config);
    logTypeExample("ConstructorParameters<typeof Service>", config);
    logTypeExample("Service instance", instance);
})();
