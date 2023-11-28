let arrType: number[] | string[];
let i: number;
arrType = [1, 2, 3, 4];
console.log("Numeric type array:");

for (i = 0; i < arrType.length; i++) {
  console.log(arrType[i]);
}
arrType = ["India", "America", "England"];
console.log("String type array:");

for (i = 0; i < arrType.length; i++) {
  console.log(arrType[i]);
}
