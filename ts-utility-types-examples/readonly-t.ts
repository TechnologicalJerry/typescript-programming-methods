/**
 * Readonly<T> – prevents reassignment of properties.
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
  const readonlyUser: Readonly<UserProfile> = { id: 3, name: "Linus", email: "l@example.com" };
    // @ts-expect-error
    readonlyUser.name = "Mutated";
    const readonlyResponse: Readonly<ApiResponse> = { data: "payload" };
    logTypeExample("Readonly<UserProfile>", readonlyUser);
    logTypeExample("Readonly<ApiResponse>", readonlyResponse);
})();
