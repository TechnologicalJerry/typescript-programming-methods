/**
 * Object.create – creates object with specified prototype.
 */

const logObjectExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const personProto = {
      greet() {
        return `Hello, ${this.name}`;
      },
    };
    const ada = Object.create(personProto);
    ada.name = "Ada";
    logObjectExample("create", "proto method call", ada.greet());
  
    const admin = Object.create(personProto, {
      name: { value: "Grace", enumerable: true },
      role: { value: "admin", enumerable: true, writable: true },
    });
    logObjectExample("create", "descriptor-defined object", admin);
})();
