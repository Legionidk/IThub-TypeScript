import * as fs from "fs";
import IFileReader from "./IFileReader";

export default class FileReader implements IFileReader {
    protected filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    readFile(): string[] {
        const data = fs.readFileSync(this.filePath, "utf-8");
        return data.split("\n").map((line) => line.trim());
    }
}
