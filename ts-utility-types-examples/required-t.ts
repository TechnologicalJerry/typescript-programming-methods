/**
 * Required<T> – opposite of Partial; all properties become mandatory.
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
  type RequiredUser = Required<UserProfile>;
    const completeUser: RequiredUser = { id: 2, name: "Grace", email: "g@example.com", phone: "123" };
    type RequiredResponse = Required<ApiResponse>;
    const response: RequiredResponse = { data: "ok", error: "none" };
    logTypeExample("Required<UserProfile>", completeUser);
    logTypeExample("Required<ApiResponse>", response);
})();
