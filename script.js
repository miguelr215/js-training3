/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import Car from "./Car/Car.js";
import Truck from "./Truck/Truck.js";
import Plane from "./Plane/Plane.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const content = `
  <main>
    <article>
      <h1>${everydayPack.name}</h1>
      <ul>
        <li>Volume: ${everydayPack.volume}</li>
        <li>Color: ${everydayPack.color}</li>
        <li>Age: ${everydayPack.backpackAge()}</li>
        <li>Number of pockets: ${everydayPack.pocketNum}</li>
        <li>Left strap length: ${everydayPack.strapLength.left}</li>
        <li>Right strap length: ${everydayPack.strapLength.right}</li>
        <li>Lid status: ${everydayPack.lidOpen}</li>
      </ul>
    </article>
  </main>
`;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired: ", everydayPack.backpackAge());
console.log("******************************************");

const MommysCar = new Car(
  2015,
  "Toyota",
  "Sienna",
  "gray",
  false
);

console.log("MommysCar:", MommysCar);
console.log("The radio is ", MommysCar.radioActive);
MommysCar.toggleRadio(true);
console.log("Click the radio is now ", MommysCar.radioActive);
console.log("******************************************");

const DaddysTruck = new Truck(
  2018,
  "Dodge",
  "Ram",
  "blue",
  true,
  ["ladder", "paint", "toolbox", "lunch box"]
);

const newPickup = ["bread", "butter", "spaghetti", "Jack Daniels", "Coke Zero"];

console.log("DaddysTruck:", DaddysTruck);
console.log("Is there a load in the truck? ", DaddysTruck.haulingActive);
console.log("What's it hauling? ", DaddysTruck.haulLoad);
DaddysTruck.updateHaulLoad(newPickup);
console.log("NEW PICKUP! How about now? ", DaddysTruck.haulLoad);
console.log("******************************************");

const newTrip = new Plane(
  "Boeing",
  "Max 500",
  120,
  95,
  "Portland",
  "Philadelphia"
);

console.log("newTrip:", newTrip);
console.log("We are currently in ", newTrip.currentLocation);
console.log("Our destination is ", newTrip.destination);
newTrip.updateDestination("Florida LOL");
console.log("REROUTE! Our new destination is ", newTrip.destination);
console.log("******************************************");