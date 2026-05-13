import IParser from "./IParser";

export default class Parser implements IParser {
    protected data: string[];

    constructor(lines: string[]) {
        this.data = lines;
    }

    parse(): {}[] {
        return this.data.map((line) => {
            const match = line.match(/Фигурка \d+: (\S+) (\S+)/);

            if (!match) {
                throw new Error(`Неверный лог!\n${line}`);
            }

            const [shape, color] = match;
            return { shape, color };
        });
    }
}
