import IUnitFactory from "./IUnitFactory";

import FireCharacter from "../specialCharacters/fire";

import Warrior from "../baseCharacters/warrior";
import Wizard from "../baseCharacters/wizard";
import Archer from "../baseCharacters/archer";

export default class FireFactory implements IUnitFactory {
    warrior(): FireCharacter {
        return new FireCharacter(new Warrior());
    }

    wizard(): FireCharacter {
        return new FireCharacter(new Wizard());
    }

    archer(): FireCharacter {
        return new FireCharacter(new Archer());
    }
}
