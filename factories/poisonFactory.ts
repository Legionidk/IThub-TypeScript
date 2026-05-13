import IUnitFactory from "./IUnitFactory";

import PoisonCharacter from "../specialCharacters/poison";

import Warrior from "../baseCharacters/warrior";
import Wizard from "../baseCharacters/wizard";
import Archer from "../baseCharacters/archer";

export default class PoisonFactory implements IUnitFactory {
    warrior(): PoisonCharacter {
        return new PoisonCharacter(new Warrior());
    }

    wizard(): PoisonCharacter {
        return new PoisonCharacter(new Wizard());
    }

    archer(): PoisonCharacter {
        return new PoisonCharacter(new Archer());
    }
}
