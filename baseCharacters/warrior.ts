import Unit from "../unit/unit";

export default class Warrior implements Unit {
    get name(): string {
        return "Воин";
    }

    get baseDamage(): number {
        return 15;
    }
}
