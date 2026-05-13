import Warrior from "./baseCharacters/warrior";
import Wizard from "./baseCharacters/wizard";
import Archer from "./baseCharacters/archer";

import Fire from "./specialCharacters/fire";
import Frost from "./specialCharacters/frost";
import Poison from "./specialCharacters/poison";

const baseWarrior = new Warrior();
const baseWizard = new Wizard();
const baseArcher = new Archer();

const army = [
    [new Fire(baseWarrior), new Fire(baseWizard), new Fire(baseArcher)],
    [new Frost(baseWarrior), new Frost(baseWizard), new Frost(baseArcher)],
    [new Poison(baseWarrior), new Poison(baseWizard), new Poison(baseArcher)],
];

for (const specialArmy of army) {
    for (const specialUnit of specialArmy) {
        console.log(specialUnit.name);
        console.log(`Базовый урон: ${specialUnit.baseDamage}`);
        console.log(`Способность: ${specialUnit.ability}`)
        console.log()
    }
}
