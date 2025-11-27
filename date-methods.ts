/**
 * Date/Time APIs with side-by-side getter/setter examples.
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

// Date.now: milliseconds since Unix epoch.
(() => {
  logDateExample("now", "current timestamp", Date.now());
  logDateExample("now", "convert to Date", new Date(Date.now()).toISOString());
})();

// getFullYear: 4-digit year in local time.
(() => {
  logDateExample("getFullYear", "base year", baseDate.getFullYear());
  logDateExample("getFullYear", "current year", new Date().getFullYear());
})();

// getMonth: zero-based month (0 Jan ... 11 Dec).
(() => {
  logDateExample("getMonth", "base month index", baseDate.getMonth());
  logDateExample("getMonth", "current month index", new Date().getMonth());
})();

// getDate: day of month (1-31).
(() => {
  logDateExample("getDate", "base day", baseDate.getDate());
  logDateExample("getDate", "today day", new Date().getDate());
})();

// getDay: weekday index (0 Sunday ... 6 Saturday).
(() => {
  logDateExample("getDay", "base weekday", baseDate.getDay());
  logDateExample("getDay", "today weekday", new Date().getDay());
})();

// getHours: hour in local time (0-23).
(() => {
  logDateExample("getHours", "base hour", baseDate.getHours());
  logDateExample("getHours", "now hour", new Date().getHours());
})();

// getMinutes: minutes (0-59).
(() => {
  logDateExample("getMinutes", "base minutes", baseDate.getMinutes());
  logDateExample("getMinutes", "now minutes", new Date().getMinutes());
})();

// getSeconds: seconds (0-59).
(() => {
  logDateExample("getSeconds", "base seconds", baseDate.getSeconds());
  logDateExample("getSeconds", "now seconds", new Date().getSeconds());
})();

// getMilliseconds: milliseconds (0-999).
(() => {
  logDateExample("getMilliseconds", "base ms", baseDate.getMilliseconds());
  logDateExample("getMilliseconds", "now ms", new Date().getMilliseconds());
})();

// setFullYear: mutate year (optionally month/day).
(() => {
  const clone = new Date(baseDate);
  clone.setFullYear(2030);
  logDateExample("setFullYear", "change only year", clone.toISOString());

  clone.setFullYear(2022, 5, 10);
  logDateExample("setFullYear", "change year+month+day", clone.toISOString());
})();

// setMonth: mutate month (optionally day).
(() => {
  const clone = new Date(baseDate);
  clone.setMonth(0);
  logDateExample("setMonth", "set to January", clone.toISOString());

  clone.setMonth(11, 31);
  logDateExample("setMonth", "December 31st", clone.toISOString());
})();

// setDate: set day of month (auto adjusts month).
(() => {
  const clone = new Date(baseDate);
  clone.setDate(1);
  logDateExample("setDate", "first day of month", clone.toISOString());

  clone.setDate(35);
  logDateExample("setDate", "overflow to next month", clone.toISOString());
})();

// setHours: set hour (optionally minute/second/ms).
(() => {
  const clone = new Date(baseDate);
  clone.setHours(5);
  logDateExample("setHours", "set to 05:xx", clone.toISOString());

  clone.setHours(23, 59, 59, 999);
  logDateExample("setHours", "set to end of day", clone.toISOString());
})();

// setMinutes: set minutes (optionally seconds/ms).
(() => {
  const clone = new Date(baseDate);
  clone.setMinutes(45);
  logDateExample("setMinutes", "45 minutes", clone.toISOString());

  clone.setMinutes(120, 30, 250);
  logDateExample("setMinutes", "overflow hours", clone.toISOString());
})();

// setSeconds: set seconds (optionally ms).
(() => {
  const clone = new Date(baseDate);
  clone.setSeconds(5);
  logDateExample("setSeconds", "5 seconds", clone.toISOString());

  clone.setSeconds(75, 800);
  logDateExample("setSeconds", "overflow minutes", clone.toISOString());
})();

// toISOString: ISO-8601 UTC string.
(() => {
  logDateExample("toISOString", "base date", baseDate.toISOString());
  logDateExample("toISOString", "current date", new Date().toISOString());
})();

// toString: localized human-readable string.
(() => {
  logDateExample("toString", "base toString", baseDate.toString());
  logDateExample("toString", "now toString", new Date().toString());
})();

// toLocaleDateString: locale-specific date portion.
(() => {
  logDateExample("toLocaleDateString", "US format", baseDate.toLocaleDateString("en-US"));
  logDateExample("toLocaleDateString", "India format", baseDate.toLocaleDateString("en-IN", { weekday: "long" }));
})();

// toLocaleTimeString: locale-specific time portion.
(() => {
  logDateExample("toLocaleTimeString", "24-hour", baseDate.toLocaleTimeString("en-GB"));
  logDateExample("toLocaleTimeString", "12-hour with options", baseDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
})();

// getTime: numeric timestamp (same as valueOf()).
(() => {
  logDateExample("getTime", "base timestamp", baseDate.getTime());
  logDateExample("getTime", "now timestamp", new Date().getTime());
})();

// setTime: set date from timestamp.
(() => {
  const clone = new Date();
  clone.setTime(baseDate.getTime());
  logDateExample("setTime", "copy timestamp", clone.toISOString());

  clone.setTime(Date.now());
  logDateExample("setTime", "set to now", clone.toISOString());
})();

