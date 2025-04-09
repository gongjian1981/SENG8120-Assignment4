import calculateCanvasSize from "./calculateCanvasPerimeter";

describe("alculateCanvasPerimeter", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })
});
