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
 * @param {number} sausagesPerPackage
 * @param {number} bunsPerPackage
 * @returns {Object}
 */
function calculateHotDogs(sausagesPerPackage, bunsPerPackage) {
  var lcm = getLCM(sausagesPerPackage, bunsPerPackage);
  var numSausagePkgs = lcm / sausagesPerPackage;
  var numBunPkgs = lcm / bunsPerPackage;
  var numHotDogs = lcm;

  return { numSausagePkgs, numBunPkgs, numHotDogs };
}

export default calculateHotDogs;
