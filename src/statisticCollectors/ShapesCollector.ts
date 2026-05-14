import IStatisticCollector from "./IStatisticCollector";
import ShapeRecord from "../records/ShapeRecord";

export default class ShapesCollector implements IStatisticCollector<ShapeRecord> {
    calculate(data: ShapeRecord[]): Map<string, number> {
        const result = new Map<string, number>();

        for (const shape of data) {
            result.set(shape.shape, (result.get(shape.shape) || 0) + 1);
        }

        return result;
    }
}
