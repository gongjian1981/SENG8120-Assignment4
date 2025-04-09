import calculateModernisticCanvasSize from "./calculateModernisticCanvasSize";

describe("calculateModernisticCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateModernisticCanvasSize("3", "2");

    expect(result).toEqual([2, 4]);
  })

  test('should return 0 for length and width of 0', () => {
    expect(calculateModernisticCanvasSize('0', '0')).toStrictEqual([0, 0]);
  });

  test('should handle negative values correctly', () => {
    expect(calculateModernisticCanvasSize('-3', '2')).toEqual([2, 4]);
    expect(calculateModernisticCanvasSize('3', '-2')).toEqual([2, 4]);
    expect(calculateModernisticCanvasSize('-3', '-2')).toEqual([2, 4]);
  });
});