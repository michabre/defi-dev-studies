const example = require("../src/example");

describe("Example returns a string", () => {
  let exampleTest = example;

  it("returns a string", () => {
    let text = exampleTest("test");
    expect(text).toBe("test");
  });
});
