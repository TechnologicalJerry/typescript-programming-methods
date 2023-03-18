et diceEntries = new Set();

diceEntries.add(1).add(2).add(3).add(4).add(5).add(6);

console.log("Dice Entries are:");
for (let diceNumber of diceEntries) {
    console.log(diceNumber);
}

console.log("Dice Entries with forEach are:");
diceEntries.forEach(function (value) {
    console.log(value);
});  