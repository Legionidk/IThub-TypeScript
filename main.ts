import FireFactory from "./factories/fireFactory";
import FrostFactory from "./factories/frostFactory";
import PoisonFactory from "./factories/poisonFactory";

const fireFactory = new FireFactory();
const frostFactory = new FrostFactory();
const poisonFactory = new PoisonFactory();

const army = [
    [fireFactory.archer(), fireFactory.warrior(), fireFactory.wizard()],
    [frostFactory.archer(), frostFactory.warrior(), frostFactory.wizard()],
    [poisonFactory.archer(), poisonFactory.warrior(), poisonFactory.wizard()],
];

console.log(fireFactory.archer());

for (const specialArmy of army) {
    for (const specialUnit of specialArmy) {
        console.log(specialUnit.name);
        console.log(`Базовый урон: ${specialUnit.baseDamage}`);
        console.log(`Способность: ${specialUnit.ability}`);
        console.log();
    }
}
