const { qase } = require("jest-qase-reporter/jest");

describe("Example: ignore.spec.js", () => {
  test("This test is executed using Playwright; however, it is NOT reported to Qase", () => {
    qase.ignore();
    expect(true).toBe(true);
  });
});
