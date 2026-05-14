export default interface IParser<T> {
    parse(lines: string[]): T[];
}
