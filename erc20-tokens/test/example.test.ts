import { Example } from "../src/example";

describe("Example return a string", () => {
  let example = Example;

  it("returns a string", () => {
    let text = example("test");
    expect(text).toBe("test");
  });
});
