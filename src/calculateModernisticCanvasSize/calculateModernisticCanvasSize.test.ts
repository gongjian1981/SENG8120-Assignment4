import calculateModernisticCanvasSize from "./calculateModernisticCanvasSize";

describe("calculateModernisticCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateModernisticCanvasSize("3", "2");

    expect(result).toEqual([2, 4]);
  })
});