/**
 * TypeScript utility types and related helpers with small runtime logs so you
 * can see the resulting shapes. Comments describe compile-time benefits.
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

// Partial<T>: makes every property optional; great for patch updates.
(() => {
  const partialUser: Partial<UserProfile> = { id: 1, phone: "+1-555" };
  const partialResponse: Partial<ApiResponse> = { error: "Timeout" };
  logTypeExample("Partial<UserProfile>", partialUser);
  logTypeExample("Partial<ApiResponse>", partialResponse);
})();

// Required<T>: opposite of Partial; all properties become mandatory.
(() => {
  type RequiredUser = Required<UserProfile>;
  const completeUser: RequiredUser = { id: 2, name: "Grace", email: "g@example.com", phone: "123" };
  type RequiredResponse = Required<ApiResponse>;
  const response: RequiredResponse = { data: "ok", error: "none" };
  logTypeExample("Required<UserProfile>", completeUser);
  logTypeExample("Required<ApiResponse>", response);
})();

// Readonly<T>: prevents reassignment of properties.
(() => {
  const readonlyUser: Readonly<UserProfile> = { id: 3, name: "Linus", email: "l@example.com" };
  // @ts-expect-error
  readonlyUser.name = "Mutated";
  const readonlyResponse: Readonly<ApiResponse> = { data: "payload" };
  logTypeExample("Readonly<UserProfile>", readonlyUser);
  logTypeExample("Readonly<ApiResponse>", readonlyResponse);
})();

// Record<K, T>: constructs type with keys K and value type T.
(() => {
  const scoreByUser: Record<string, number> = { Ada: 99, Grace: 95 };
  const featureFlags: Record<"beta" | "darkMode", boolean> = { beta: true, darkMode: false };
  logTypeExample("Record<string, number>", scoreByUser);
  logTypeExample("Record<'beta'|'darkMode', boolean>", featureFlags);
})();

// Pick<T, K>: selects subset of properties.
(() => {
  type UserPreview = Pick<UserProfile, "id" | "name">;
  const preview: UserPreview = { id: 4, name: "Mary" };
  type ContactInfo = Pick<UserProfile, "email" | "phone">;
  const contact: ContactInfo = { email: "mary@example.com", phone: "999" };
  logTypeExample("Pick<UserProfile,'id'|'name'>", preview);
  logTypeExample("Pick<UserProfile,'email'|'phone'>", contact);
})();

// Omit<T, K>: removes specific properties.
(() => {
  type UserWithoutSensitive = Omit<UserProfile, "email" | "phone">;
  const safeUser: UserWithoutSensitive = { id: 5, name: "NoEmail" };
  type ResponseWithoutData = Omit<ApiResponse, "data">;
  const errorOnly: ResponseWithoutData = { error: "Not Found" };
  logTypeExample("Omit<UserProfile,'email'|'phone'>", safeUser);
  logTypeExample("Omit<ApiResponse,'data'>", errorOnly);
})();

// Exclude<T, U>: removes union members assignable to U.
(() => {
  type Status = "loading" | "ready" | "error";
  type NonErrorStatus = Exclude<Status, "error">;
  const state: NonErrorStatus = "ready";
  type NumericOrString = Exclude<string | number | boolean, boolean>;
  const sample: NumericOrString = 42;
  logTypeExample("Exclude status", state);
  logTypeExample("Exclude types", sample);
})();

// Extract<T, U>: keeps union members assignable to U.
(() => {
  type SuccessState = Extract<"loading" | "ready" | "error", "ready" | "success">;
  const ready: SuccessState = "ready";
  type NumberLike = Extract<string | number | bigint, number | bigint>;
  const bigNumber: NumberLike = 10n;
  logTypeExample("Extract states", ready);
  logTypeExample("Extract numeric types", bigNumber);
})();

// NonNullable<T>: removes null and undefined.
(() => {
  type MaybeString = string | null | undefined;
  type CertainString = NonNullable<MaybeString>;
  const safe: CertainString = "text";
  type MaybeResponse = ApiResponse | null;
  const safeResponse: NonNullable<MaybeResponse> = { data: "ok" };
  logTypeExample("NonNullable<string>", safe);
  logTypeExample("NonNullable<ApiResponse>", safeResponse);
})();

// ReturnType<T>: derives function return type.
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

// Parameters<T>: tuple of function parameter types.
(() => {
  const updateUser = (id: number, patch: Partial<UserProfile>) => ({ id, ...patch });
  type UpdateArgs = Parameters<typeof updateUser>;
  const args: UpdateArgs = [1, { name: "Updated" }];
  const auto = updateUser(...args);
  logTypeExample("Parameters<typeof updateUser>", args);
  logTypeExample("updateUser result", auto);
})();

// ConstructorParameters<T>: tuple of constructor arguments.
(() => {
  class Service {
    constructor(public name: string, public url: string) {}
  }
  type ServiceArgs = ConstructorParameters<typeof Service>;
  const config: ServiceArgs = ["Auth", "https://api.example.com"];
  const instance = new Service(...config);
  logTypeExample("ConstructorParameters<typeof Service>", config);
  logTypeExample("Service instance", instance);
})();

// InstanceType<T>: type of class instance.
(() => {
  class Repository {
    constructor(public table: string) {}
    count() {
      return 42;
    }
  }
  type RepositoryInstance = InstanceType<typeof Repository>;
  const repo: RepositoryInstance = new Repository("users");
  logTypeExample("InstanceType<typeof Repository>", repo.count());

  type DateInstance = InstanceType<typeof Date>;
  const date: DateInstance = new Date();
  logTypeExample("InstanceType<typeof Date>", date.toISOString());
})();

// Awaited<T>: resolves the value inside Promises (incl. nested).
(() => {
  type FetchPromise = Promise<ApiResponse>;
  type FetchResult = Awaited<FetchPromise>;
  const awaited: FetchResult = { data: "done" };

  type NestedPromise = Promise<Promise<number>>;
  type DeepValue = Awaited<NestedPromise>;
  const deep: DeepValue = 5;
  logTypeExample("Awaited<Promise<ApiResponse>>", awaited);
  logTypeExample("Awaited<Promise<Promise<number>>>", deep);
})();

// ReadonlyArray<T>: immutable array type.
(() => {
  const ids: ReadonlyArray<number> = [1, 2, 3];
  // @ts-expect-error
  ids.push(4);
  const names: ReadonlyArray<string> = ["Ada", "Grace"];
  logTypeExample("ReadonlyArray<number>", ids);
  logTypeExample("ReadonlyArray<string>", names);
})();

// unknown: safer top-type; must narrow before use.
(() => {
  const value: unknown = JSON.parse('{"id":10}');
  if (typeof value === "object" && value !== null && "id" in value) {
    logTypeExample("unknown narrowed", (value as { id: number }).id);
  }
  const uncertain: unknown = "maybe string";
  if (typeof uncertain === "string") {
    logTypeExample("unknown string length", uncertain.length);
  }
})();

// never: indicates impossible code paths or exhaustiveness checking.
(() => {
  function exhaustive(value: "a" | "b"): string {
    switch (value) {
      case "a":
        return "A";
      case "b":
        return "B";
      default: {
        const _exhaustive: never = value;
        return _exhaustive;
      }
    }
  }
  logTypeExample("never", exhaustive("a"));
  logTypeExample("never", exhaustive("b"));
})();

// any: opt-out of type checking (use sparingly).
(() => {
  let dynamic: any = 5;
  dynamic = dynamic.toFixed(2);
  dynamic = { nested: true }; // no errors
  logTypeExample("any", dynamic);

  const unsafe: any = "text";
  logTypeExample("any unsafe call", unsafe.nonExistent?.());
})();

// Union types: combine multiple possibilities.
(() => {
  type Id = number | string;
  const numericId: Id = 5;
  const stringId: Id = "user-5";
  logTypeExample("Union numeric", numericId);
  logTypeExample("Union string", stringId);
})();

// Intersection types: merge multiple types into one.
(() => {
  type Auditable = { createdAt: Date };
  type Entity = { id: number };
  type AuditedEntity = Auditable & Entity;
  const record: AuditedEntity = { id: 1, createdAt: new Date() };
  const extended: AuditedEntity = { id: 2, createdAt: new Date("2024-01-01") };
  logTypeExample("Intersection record", record);
  logTypeExample("Intersection extended", extended);
})();

// Optional properties: propertyName?: Type adds undefined automatically.
(() => {
  type OptionalSettings = {
    retries?: number;
    timeout?: number;
  };
  const defaultSettings: OptionalSettings = {};
  const customSettings: OptionalSettings = { retries: 3, timeout: 5000 };
  logTypeExample("Optional default", defaultSettings);
  logTypeExample("Optional custom", customSettings);
})();

// Enums: named sets of constants (numeric or string). Prefer unions for flexibility.
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

// Tuples: fixed-length, ordered arrays with known types.
(() => {
  type Point = [number, number];
  const origin: Point = [0, 0];
  const location: Point = [10, 20];

  type HttpResponse = [status: number, body: string];
  const success: HttpResponse = [200, "OK"];
  logTypeExample("Tuple points", { origin, location });
  logTypeExample("Tuple HTTP", success);
})();

