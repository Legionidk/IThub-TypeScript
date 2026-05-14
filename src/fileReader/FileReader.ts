import * as fs from "fs";
import IFileReader from "./IFileReader";

export default class FileReader implements IFileReader {
    readFromTxt(filePath: string): string[] {
        const data = fs.readFileSync(filePath, "utf-8");
        return data.split("\n").map((line) => line.trim());
    }
}
