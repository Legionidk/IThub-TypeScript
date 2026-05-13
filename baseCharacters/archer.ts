import Unit from "../unit/unit";

export default class Archer implements Unit {
    get name(): string {
        return "Лучник";
    }

    get baseDamage(): number {
        return 15;
    }
}
