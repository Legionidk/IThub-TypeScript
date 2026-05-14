export default interface IStatisticCollector<T> {
    calculate(data: T[]): Map<string, number>;
}
