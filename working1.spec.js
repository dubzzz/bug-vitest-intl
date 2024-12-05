import { test, vi } from "vitest";

const UntouchedIntl = Intl;
test("My test (working #1)", () => {
  vi.useFakeTimers();
  vi.stubGlobal("Intl", { ...UntouchedIntl });
});
