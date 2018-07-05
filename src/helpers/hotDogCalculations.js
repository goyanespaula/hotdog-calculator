/**
 * Returns the greatest common divisor of 2 numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function getGCD(num1, num2) {
  if (num1 === num2) return num1;
  if (num1 > num2) {
    return getGCD(num1 - num2, num2);
  }
  return getGCD(num1, num2 - num1);
}

/**
 * Returns the lowest common multiple of 2 numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function getLCM(num1, num2) {
  return (num1 * num2) / getGCD(num1, num2);
}

/**
 * Returns lowest amount of sausage & buns packages needed for a 1:1 ratio and the total hot dogs made
 * @param {number} sausagesPerPkg
 * @param {number} bunsPerPkg
 * @returns {Object}
 */
function calculateHotDogs(
  sausagesPerPkg,
  bunsPerPkg,
  numGuests = 1,
  dogsPerGuest = 1
) {
  var minHotDogs = numGuests * dogsPerGuest;
  var lcm = getLCM(sausagesPerPkg, bunsPerPkg);
  var numHotDogs = lcm;
  while (numHotDogs < minHotDogs) {
    numHotDogs += lcm;
  }
  var numSausagePkgs = numHotDogs / sausagesPerPkg;
  var numBunPkgs = numHotDogs / bunsPerPkg;

  return { numSausagePkgs, numBunPkgs, numHotDogs };
}

export default calculateHotDogs;
