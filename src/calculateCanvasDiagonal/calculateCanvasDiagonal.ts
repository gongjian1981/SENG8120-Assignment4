import { parse } from "path";

export default function calculateCanvasDiagonal(
  length: string,
  width: string
) {
  var lengthInt = parseInt(length);
  var widthInt = parseInt(width);
  return Math.sqrt(lengthInt*lengthInt + widthInt*widthInt);
}
