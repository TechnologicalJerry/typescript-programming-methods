/**
 * Object.seal – disallows adding/removing props but allows updates.
 */

/**
 * Helper type declarations reused across object examples.
 */
type User = {
  id: number;
  name: string;
  role?: string;
  active?: boolean;
};

const templateUser = { id: 1, name: "Ada", role: "architect", active: true };

const logObjectExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const sealed = Object.seal({ status: "draft", published: false });
    sealed.status = "review";
    // @ts-expect-error
    sealed.newProp = true;
    logObjectExample("seal", "updated sealed object", sealed);
  
    const sealedUser = Object.seal({ ...templateUser });
    delete sealedUser.role;
    logObjectExample("seal", "delete ignored", sealedUser);
})();
