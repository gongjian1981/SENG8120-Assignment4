import calculateModernisticCanvasSize from "./calculateModernisticCanvasSize";

describe("calculateModernisticCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateModernisticCanvasSize("3", "2");

    expect(result).toEqual([2, 4]);
  })

  test('should return 0 for length and width of 0', () => {
    expect(calculateModernisticCanvasSize('0', '0')).toBe([0, 0]);
  });

});