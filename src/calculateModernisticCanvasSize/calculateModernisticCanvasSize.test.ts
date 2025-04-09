import calculateModernisticCanvasSize from "./calculateModernisticCanvasSize";

describe("calculateModernisticCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateModernisticCanvasSize("2", "3");

    expect(result).toEqual([2, 4]);
  })
});