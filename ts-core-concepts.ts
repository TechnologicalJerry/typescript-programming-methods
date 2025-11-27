/**
 * Core TypeScript language features with inline explanations and runnable examples.
 * Each section keeps code compact yet demonstrates the concept in action.
 */

console.log("=== Interfaces ===");
interface Person {
  id: number;
  name: string;
  contact?: string;
}
const interfaceExample: Person = { id: 1, name: "Ada" };
const interfaceExtension: Person = { id: 2, name: "Grace", contact: "grace@example.com" };
console.log(interfaceExample, interfaceExtension);

console.log("=== Types (type aliases) ===");
type Coordinates = { x: number; y: number };
type TextOrNumber = string | number;
const locationA: Coordinates = { x: 10, y: 20 };
const mixedValue: TextOrNumber = "ID-42";
console.log(locationA, mixedValue);

console.log("=== Generics ===");
function wrapValue<T>(value: T): { value: T } {
  return { value };
}
const wrappedNumber = wrapValue(5);
const wrappedString = wrapValue("text");
console.log(wrappedNumber, wrappedString);

console.log("=== Enums ===");
enum StatusEnum {
  Pending = "pending",
  Done = "done",
  Failed = "failed",
}
const enumExample = StatusEnum.Done;
console.log(enumExample, Object.values(StatusEnum));

console.log("=== Decorators (experimental) ===");
function ReadonlyProperty(_: object, propertyKey: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
}
class DecoratedExample {
  @ReadonlyProperty
  title = "Initial";

  updateTitle(newTitle: string) {
    // @ts-expect-error because decorator made property readonly
    this.title = newTitle;
  }
}
const decorated = new DecoratedExample();
console.log(decorated.title);

console.log("=== Union Types ===");
type ApiStatus = "idle" | "loading" | "error";
const statusIdle: ApiStatus = "idle";
const statusError: ApiStatus = "error";
console.log(statusIdle, statusError);

console.log("=== Intersection Types ===");
type Timestamped = { timestamp: number };
type Payload = { payload: string };
type EventRecord = Timestamped & Payload;
const event: EventRecord = { timestamp: Date.now(), payload: "CLICK" };
console.log(event);

console.log("=== Type Aliases ===");
type UserId = number;
type ReadonlyName = Readonly<{ name: string }>;
const userId: UserId = 10;
const readonlyName: ReadonlyName = { name: "Linus" };
console.log(userId, readonlyName);

console.log("=== Type Guards ===");
type AdminUser = Person & { permissions: string[] };
function isAdmin(user: Person | AdminUser): user is AdminUser {
  return "permissions" in user;
}
const maybeAdmin: AdminUser = { id: 3, name: "Root", permissions: ["*"] };
if (isAdmin(maybeAdmin)) {
  console.log("Admin permissions:", maybeAdmin.permissions);
}
const regularUser: Person = { id: 4, name: "User" };
console.log("Is regular user admin?", isAdmin(regularUser));

console.log("=== Type Casting (as) ===");
const unknownValue: unknown = "maybe string";
const lengthViaCast = (unknownValue as string).length;
const forcedNumber = ("42" as unknown as number) + 1;
console.log(lengthViaCast, forcedNumber);

console.log("=== Classes ===");
class User {
  constructor(public id: number, public name: string) {}
  describe() {
    return `${this.id} - ${this.name}`;
  }
}
const classInstance = new User(5, "TypeScript");
console.log(classInstance.describe());

console.log("=== Abstract Classes ===");
abstract class Shape {
  constructor(public name: string) {}
  abstract area(): number;
}
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super("Rectangle");
  }
  area(): number {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(4, 5);
console.log(rectangle.name, rectangle.area());

console.log("=== Namespaces ===");
namespace Geometry {
  export const PI = 3.14;
  export function circleArea(radius: number) {
    return PI * radius * radius;
  }
}
console.log(Geometry.circleArea(3));

console.log("=== Modules (ES module syntax) ===");
export const exportedConstant = "Module export example";
export function exportedFunction(name: string) {
  return `Hello ${name}`;
}
console.log(exportedConstant, exportedFunction("TS"));

console.log("=== Access Modifiers ===");
class Account {
  public username: string;
  private password: string;
  protected token: string;

  constructor(username: string, password: string, token: string) {
    this.username = username;
    this.password = password;
    this.token = token;
  }

  authenticate(password: string) {
    return this.password === password;
  }
}
class AdminAccount extends Account {
  resetToken(newToken: string) {
    this.token = newToken; // protected accessible here
  }
}
const account = new Account("user", "secret", "token");
console.log(account.username, account.authenticate("secret"));

console.log("=== Static Properties/Methods ===");
class IdGenerator {
  private static lastId = 0;
  static next() {
    return ++IdGenerator.lastId;
  }
}
console.log(IdGenerator.next(), IdGenerator.next());

console.log("=== Readonly Properties ===");
class ImmutableRecord {
  readonly id: number;
  constructor(id: number, public name: string) {
    this.id = id;
  }
}
const recordImmutable = new ImmutableRecord(1, "Lockdown");
// @ts-expect-error
recordImmutable.id = 2;
console.log(recordImmutable);

