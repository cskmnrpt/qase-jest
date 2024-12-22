import { qase } from "jest-qase-reporter/jest";

describe("(test) Example: comment.spec.js", () => {
  test("(test) A test case with qase.comment()", () => {
    /*
     * Please note, this comment is added to a Result, not to the Test case.
     */

    qase.comment(
      "This comment will be displayed in the 'Actual Result' field of the test result in Qase.",
    );

    expect(true).toBe(true);
  });
});
