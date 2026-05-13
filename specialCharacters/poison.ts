import UnitDecorator from "../unit/unitDecorator";

export default class Poison extends UnitDecorator {
    protected poisonDamage: number = 10;

    get name(): string {
        return `Ядовитый ${super.name}`;
    }

    get baseDamage(): number {
        return super.baseDamage;
    }

    get ability(): string {
        return `Периодический урон ядом (${this.poisonDamage} ед.)`;
    }
}
