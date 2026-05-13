import Unit from "../unit/unit";

export default class Wizard implements Unit {
    get name(): string {
        return "Маг";
    }

    get baseDamage(): number {
        return 15;
    }
}
