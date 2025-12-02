/**
 * ReturnType<T> – derives function return type.
 */

type ApiResponse = {
  data: string;
  error?: string;
};

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  const makeUser = (name: string) => ({ id: Date.now(), name });
    type UserReturn = ReturnType<typeof makeUser>;
    const newUser: UserReturn = makeUser("Factory");
  
    function fetchResponse(): Promise<ApiResponse> {
      return Promise.resolve({ data: "done" });
    }
    type FetchReturn = ReturnType<typeof fetchResponse>;
    const result: FetchReturn = fetchResponse();
    logTypeExample("ReturnType<typeof makeUser>", newUser);
    logTypeExample("ReturnType<typeof fetchResponse>", result);
})();
