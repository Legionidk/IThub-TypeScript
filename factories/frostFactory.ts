import IUnitFactory from "./IUnitFactory";

import FrostCharacter from "../specialCharacters/frost";

import Warrior from "../baseCharacters/warrior";
import Wizard from "../baseCharacters/wizard";
import Archer from "../baseCharacters/archer";

export default class FrostFactory implements IUnitFactory {
    warrior(): FrostCharacter {
        return new FrostCharacter(new Warrior());
    }

    wizard(): FrostCharacter {
        return new FrostCharacter(new Wizard());
    }

    archer(): FrostCharacter {
        return new FrostCharacter(new Archer());
    }
}
