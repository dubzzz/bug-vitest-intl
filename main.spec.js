import { test, vi } from "vitest";

const UntouchedIntl = Intl;

test("My test (not working)", () => {
  vi.stubGlobal("Intl", { ...UntouchedIntl });
  vi.useFakeTimers();
});

test("My test (working)", () => {
  vi.stubGlobal("Intl", UntouchedIntl);
  vi.useFakeTimers();
});
