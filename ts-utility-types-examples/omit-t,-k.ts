/**
 * Omit<T, K> – removes specific properties.
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
  type UserWithoutSensitive = Omit<UserProfile, "email" | "phone">;
    const safeUser: UserWithoutSensitive = { id: 5, name: "NoEmail" };
    type ResponseWithoutData = Omit<ApiResponse, "data">;
    const errorOnly: ResponseWithoutData = { error: "Not Found" };
    logTypeExample("Omit<UserProfile,'email'|'phone'>", safeUser);
    logTypeExample("Omit<ApiResponse,'data'>", errorOnly);
})();
