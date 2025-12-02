/**
 * NonNullable<T> – removes null and undefined.
 */

type ApiResponse = {
  data: string;
  error?: string;
};

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  type MaybeString = string | null | undefined;
    type CertainString = NonNullable<MaybeString>;
    const safe: CertainString = "text";
    type MaybeResponse = ApiResponse | null;
    const safeResponse: NonNullable<MaybeResponse> = { data: "ok" };
    logTypeExample("NonNullable<string>", safe);
    logTypeExample("NonNullable<ApiResponse>", safeResponse);
})();
