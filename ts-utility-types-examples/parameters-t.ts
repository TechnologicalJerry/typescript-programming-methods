/**
 * Parameters<T> – tuple of function parameter types.
 */

type UserProfile = {
  id: number;
  name: string;
  email: string;
  phone?: string;
};

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  const updateUser = (id: number, patch: Partial<UserProfile>) => ({ id, ...patch });
    type UpdateArgs = Parameters<typeof updateUser>;
    const args: UpdateArgs = [1, { name: "Updated" }];
    const auto = updateUser(...args);
    logTypeExample("Parameters<typeof updateUser>", args);
    logTypeExample("updateUser result", auto);
})();
