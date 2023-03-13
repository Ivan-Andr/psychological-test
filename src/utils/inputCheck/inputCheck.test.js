import { stage2Logic } from "./inputCheck";

describe("stage1Logic()", () => {
  it("returns nothing", () => {
    // should return a string
    expect(stage2Logic(1, 1, "black", 1, 1, [1, 2])).toEqual("t");
  });
});
