import { test, vi } from "vitest";

// to be moved in a global setup
const defaultLocale = "en-US";
Intl.NumberFormat = class extends Intl.NumberFormat {
  constructor(...args) {
    if (args.length < 1) {
      super(defaultLocale);
    } else {
      const [locales, ...otherParams] = args;
      if (
        typeof locales === "string" ||
        (Array.isArray(locales) && locales.length !== 0)
      ) {
        super(...args);
      } else {
        super(defaultLocale, ...otherParams);
      }
    }
  }
};

test("My test (working #3)", () => {
  vi.useFakeTimers();
});
