export default function calculateModernisticCanvasSize(
  length: string,
  width: string
) {
  var lengthInt = parseInt(length);
  var widthInt = parseInt(width);
  var area1 = widthInt / 3 * lengthInt;
  var area2 = widthInt / 3 * lengthInt * 2;
  return [area1, area2];
}
