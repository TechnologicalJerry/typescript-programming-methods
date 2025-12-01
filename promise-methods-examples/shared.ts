/**
 * Shared helpers for the Promise method demos.
 */

export const simulateAsync = <T>(
  value: T,
  delayMs = 30,
  shouldReject = false
): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(typeof value === "string" ? value : "Rejected"));
      } else {
        resolve(value);
      }
    }, delayMs);
  });

export const logPromiseExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

