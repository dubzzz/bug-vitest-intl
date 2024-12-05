import { test, vi } from "vitest";

const UntouchedIntl = Intl;
test("My test (not working #1)", () => {
  const defaultLocale = "en-US";
  vi.stubGlobal("Intl", {
    ...UntouchedIntl,
    NumberFormat: class extends UntouchedIntl.NumberFormat {
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
    },
  });
  vi.useFakeTimers();
});
