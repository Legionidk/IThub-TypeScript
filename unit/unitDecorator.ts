import Unit from "./unit";

export default abstract class UnitDecorator implements Unit {
    protected unit: Unit;

    constructor(unit: Unit) {
        this.unit = unit;
    }

    get name(): string {
        return this.unit.name;
    }

    get baseDamage(): number {
        return this.unit.baseDamage;
    }
}
