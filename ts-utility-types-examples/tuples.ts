/**
 * Tuples – fixed-length, ordered arrays with known types.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  type Point = [number, number];
    const origin: Point = [0, 0];
    const location: Point = [10, 20];
  
    type HttpResponse = [status: number, body: string];
    const success: HttpResponse = [200, "OK"];
    logTypeExample("Tuple points", { origin, location });
    logTypeExample("Tuple HTTP", success);
})();
