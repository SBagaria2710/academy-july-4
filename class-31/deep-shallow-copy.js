// Shallow Copy

let zoo = {
  name: "Amazing Zoo",
  location: "Melbourne, Australia",
  animals: [
    {
      species: "Lion",
      favoriteTreat: "Meat",
    },
    {
      species: "Panda",
      favoriteTreat: "Leaves",
    },
  ],
};

let shallowCopyZoo = { ...zoo };
// shallowCopyZoo.location = "Kerela, India";
// shallowCopyZoo.animals[1].favoriteTreat = "Fruits";

// console.log("zoo:", zoo);
// console.log("shallowCopyZoo:", shallowCopyZoo);

// Deep Copy
let zooString = JSON.stringify(zoo); // Serialize the object into a JSON string
let deepCopyZoo = JSON.parse(zooString); // De-Serialize the JSON string to a new object.

deepCopyZoo.location = "Kerela, India";
deepCopyZoo.animals[1].favoriteTreat = "Fruits";

console.log("zoo:", zoo);
console.log("deepCopyZoo:", deepCopyZoo);
