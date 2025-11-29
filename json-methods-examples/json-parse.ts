/**
 * JSON.parse – turns JSON string into JS value; reviver customizes conversion.
 */

const userJson = '{"id":1,"name":"Ada","skills":["TS","Node"],"active":true}';

const logJsonExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const plain = JSON.parse(userJson);
    logJsonExample("parse", "basic parse", plain);
  
    const withReviver = JSON.parse(userJson, (key, value) => (key === "name" ? value.toUpperCase() : value));
    logJsonExample("parse", "reviver uppercases name", withReviver);
})();
