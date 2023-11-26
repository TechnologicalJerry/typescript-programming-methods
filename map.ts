let ageMapping = new Map();

ageMapping.set("Rakesh", 40);
ageMapping.set("Abhishek", 25);
ageMapping.set("Amit", 30);

for (let key of ageMapping.keys()) {
  console.log("Map Keys= " + key);
}

for (let value of ageMapping.values()) {
  console.log("Map Values= " + value);
}
console.log("The Map Enteries are: ");

for (let entry of ageMapping.entries()) {
  console.log(entry[0], entry[1]);
}
