import foods from "./foods"
import {choice, remove} from "./helpers"

console.log("************************************************")
const RANDOMFOOD = choice(foods);
console.log(`I'd like one ${RANDOMFOOD} please`);
console.log(`Here you go ${RANDOMFOOD}`);
console.log(`Delicious! May I have another?`);
console.log(`I'd like one ${RANDOMFOOD} please`);

const ALLOUT = remove(foods, RANDOMFOOD);
console.log(`I’m sorry, we’re all out. We have ${ALLOUT.length} left.`);
console.log(`${ALLOUT}`);

console.log("************************************************")


