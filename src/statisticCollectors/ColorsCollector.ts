import IStatisticCollector from "./IStatisticCollector";
import ShapeRecord from "../records/ShapeRecord";

export default class ColorCollector implements IStatisticCollector<ShapeRecord> {
    calculate(data: ShapeRecord[]): Map<string, number> {
        const result = new Map<string, number>();

        for (const shape of data) {
            result.set(shape.color, (result.get(shape.color) || 0) + 1);
        }

        return result;
    }
}
