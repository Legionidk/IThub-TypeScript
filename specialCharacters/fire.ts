import UnitDecorator from "../unit/unitDecorator";

export default class FireCharacter extends UnitDecorator {
    protected fireDamage: number = 10;

    get name(): string {
        return `Огненный ${super.name}`;
    }

    get baseDamage(): number {
        return super.baseDamage;
    }

    get ability(): string {
        return `Дополнительный урон огнем (${this.fireDamage} ед.)`;
    }
}
