import UnitDecorator from "../unit/unitDecorator";

export default class FrostCharacter extends UnitDecorator {
    protected slowdown: number = 15;

    get name(): string {
        return `Морозный ${super.name}`;
    }

    get baseDamage(): number {
        return super.baseDamage;
    }

    get ability(): string {
        return `Эффект заморозки замедляющий противников на ${this.slowdown}%`;
    }
}
