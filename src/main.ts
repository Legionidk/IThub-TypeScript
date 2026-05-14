import FileReader from "./fileReader/FileReader";
import ShapesParser from "./shapeParser/ShapesParser";
import ColorCollector from "./statisticCollectors/ColorsCollector";
import ShapesCollector from "./statisticCollectors/ShapesCollector";

const fileReader = new FileReader()
const shapesParser = new ShapesParser()
const colorCollector = new ColorCollector()
const shapesCollector = new ShapesCollector()

const data = fileReader.readFromTxt("src/data/shares.txt")
const parsedData = shapesParser.parse(data)
const colorsData = colorCollector.calculate(parsedData)
const shapesData = shapesCollector.calculate(parsedData)

console.log("--- Статистика по цветам ---")
for (const color of colorsData) {
    console.log(`${color[0]} -> ${color[1]}`)
}

console.log("\n--- Статистика по фигурам ---")
for (const shape of shapesData) {
    console.log(`${shape[0]} -> ${shape[1]}`)
}