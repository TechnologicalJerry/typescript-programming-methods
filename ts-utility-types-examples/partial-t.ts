/**
 * Partial<T> – makes every property optional; great for patch updates.
 */

type UserProfile = {
  id: number;
  name: string;
  email: string;
  phone?: string;
};

type ApiResponse = {
  data: string;
  error?: string;
};

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  const partialUser: Partial<UserProfile> = { id: 1, phone: "+1-555" };
    const partialResponse: Partial<ApiResponse> = { error: "Timeout" };
    logTypeExample("Partial<UserProfile>", partialUser);
    logTypeExample("Partial<ApiResponse>", partialResponse);
})();
