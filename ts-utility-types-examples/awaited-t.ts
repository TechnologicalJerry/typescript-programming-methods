/**
 * Awaited<T> – resolves the value inside Promises (incl. nested).
 */

type ApiResponse = {
  data: string;
  error?: string;
};

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  type FetchPromise = Promise<ApiResponse>;
    type FetchResult = Awaited<FetchPromise>;
    const awaited: FetchResult = { data: "done" };
  
    type NestedPromise = Promise<Promise<number>>;
    type DeepValue = Awaited<NestedPromise>;
    const deep: DeepValue = 5;
    logTypeExample("Awaited<Promise<ApiResponse>>", awaited);
    logTypeExample("Awaited<Promise<Promise<number>>>", deep);
})();
