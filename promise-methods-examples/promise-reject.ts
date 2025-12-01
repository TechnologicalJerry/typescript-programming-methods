import { logPromiseExample } from "./shared";

/**
 * Promise.reject – creates an immediately rejected promise with a reason.
 */
(async () => {
  await Promise.reject(new Error("manual failure")).catch((error) =>
    logPromiseExample("Promise.reject", "caught error", (error as Error).message)
  );

  await Promise.reject("string reason").catch((reason) =>
    logPromiseExample("Promise.reject", "string reason", reason)
  );

  await Promise.reject({ code: 400, message: "Bad Request" }).catch((info) =>
    logPromiseExample("Promise.reject", "object reason", info)
  );
})();

