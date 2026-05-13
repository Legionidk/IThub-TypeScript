import Warrior from "../baseCharacters/warrior";
import Wizard from "../baseCharacters/wizard";
import Archer from "../baseCharacters/archer";

export default interface IUnitFactory {
    warrior(): Warrior;
    wizard(): Wizard;
    archer(): Archer;
}
