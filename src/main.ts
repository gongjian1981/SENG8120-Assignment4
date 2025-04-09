//import calculateCanvasSize from "./calculateCanvasSize";
import calculateModernisticCanvasSize from "./calculateModernisticCanvasSize";
import paintRequiredCalculator from "./paintRequiredCalculator";

function main() {
  //const area = calculateCanvasSize("10", "20");
  const length = "3";
  const width = "2";
  const coveragePerLiter = 11.4;
  const coatsNumber = 5000;

  //const paintRequired = paintRequiredCalculator(area, coveragePerLiter);
  
  const areas = calculateModernisticCanvasSize(length, width);
  const paintRequired1 = paintRequiredCalculator(areas[0], coveragePerLiter);
  const paintRequired2 = paintRequiredCalculator(areas[1], coveragePerLiter);

  console.log(`for ${coatsNumber} copies of the work, ${paintRequired1} paint is required to cover the side of the canvas,  which is ${length}mx${width}m`);
  console.log(`for ${coatsNumber} copies of the work, ${paintRequired2} paint is required to cover the middle of the canvas, which is ${length}mx${width}m`);
}

main();
