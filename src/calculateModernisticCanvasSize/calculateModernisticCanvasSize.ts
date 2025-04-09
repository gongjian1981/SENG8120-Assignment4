export default function calculateModernisticCanvasSize(
  length: string,
  width: string
) {
  var lengthInt = parseInt(length);
  var widthInt = parseInt(width);
  var area1 = lengthInt / 3 * widthInt;
  var area2 = lengthInt / 3 * widthInt * 2;
  return [area1, area2];
}
