/**
 * Pick<T, K> – selects subset of properties.
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
  type UserPreview = Pick<UserProfile, "id" | "name">;
    const preview: UserPreview = { id: 4, name: "Mary" };
    type ContactInfo = Pick<UserProfile, "email" | "phone">;
    const contact: ContactInfo = { email: "mary@example.com", phone: "999" };
    logTypeExample("Pick<UserProfile,'id'|'name'>", preview);
    logTypeExample("Pick<UserProfile,'email'|'phone'>", contact);
})();
