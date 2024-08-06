import { promiseAll } from "./promise-all";

const resolve = (value, timeout) =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(value);
    }, timeout);
  });

const rejectError = (error, timeout) =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(error);
    }, timeout);
  });

describe("promiseAll", () => {
  it("resolves when all are resolved", async () => {
    const a = resolve("a", 100);
    const b = resolve("b", 200);
    const c = resolve("c", 300);
    const result = await promiseAll([a, b, c]);
    expect(result).toEqual(["a", "b", "c"]);
  });
  it("rejects when at least one is rejected", async () => {
    const a = rejectError("a", 100);
    const b = resolve("b", 200);
    const c = resolve("c", 300);
    await expect(promiseAll([a, b, c])).rejects.toEqual("a");
  });
  it("resolves non-promises along with promises", async () => {
    const promise = resolve("c", 100);
    const result = await promiseAll(["a", "b", promise]);
    expect(result).toEqual(["a", "b", "c"]);
  });
});
