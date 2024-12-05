import { test, vi } from "vitest";

const UntouchedIntl = Intl;
test("My test (working #2)", () => {
  vi.stubGlobal("Intl", UntouchedIntl);
  vi.useFakeTimers();
});
