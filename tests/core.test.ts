import { describe, it, expect } from "vitest";
import { Safetynet } from "../src/core.js";
describe("Safetynet", () => {
  it("init", () => { expect(new Safetynet().getStats().ops).toBe(0); });
  it("op", async () => { const c = new Safetynet(); await c.generate(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new Safetynet(); await c.generate(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
