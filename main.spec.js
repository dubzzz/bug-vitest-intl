import { test, vi } from "vitest";

const UntouchedIntl = Intl;

test("My test", () => {
  vi.stubGlobal("Intl", { ...UntouchedIntl });
  vi.useFakeTimers();
});
