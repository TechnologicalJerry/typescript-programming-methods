/**
 * copyWithin – copies part of array within itself.
 */

const logExample = (method, scenario, result) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
const copyOne = [1, 2, 3, 4, 5];
  copyOne.copyWithin(0, 3);
  logExample("copyWithin", "copy last two to start", copyOne);

  const copyTwo = ["a", "b", "c", "d", "e"];
  copyTwo.copyWithin(2, 0, 2);
  logExample("copyWithin", "copy first two into middle", copyTwo);
})();
