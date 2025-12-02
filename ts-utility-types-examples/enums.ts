/**
 * Enums – named sets of constants (numeric or string). Prefer unions for flexibility.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  enum Role {
      Admin = "admin",
      Editor = "editor",
      Viewer = "viewer",
    }
    const adminRole = Role.Admin;
    const viewerRole = Role.Viewer;
    logTypeExample("Enum Role.Admin", adminRole);
    logTypeExample("Enum Role.Viewer", viewerRole);
})();
