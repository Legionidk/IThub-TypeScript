import IParser from "./IParser";
import ShapeRecord from "../records/ShapeRecord";

export default class ShapesParser implements IParser<ShapeRecord> {
    parse(lines: string[]): ShapeRecord[] {
        return lines.map((line) => {
            const match = line.match(/Фигурка \d+: (\S+) (\S+)/);

            if (!match) {
                throw new Error(`Неверный лог!\n${line}`);
            }

            const [, shape, color] = match;
            return new ShapeRecord(shape, color);
        });
    }
}
