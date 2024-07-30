const radiusArr = [2, 4, 8, 10];

function calculateArea(radius) {
  return Math.PI * radius * radius;
}

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calculateDiameter(radius) {
  return 2 * radius;
}

function calculate(radiusArr, logic) {
  let results = [];
  for (let i = 0; i < radiusArr.length; i++) {
    results.push(logic(radiusArr[i]));
  }
  return results;
}

const areaArr = calculate(radiusArr, calculateArea);
const circumferenceArr = calculate(radiusArr, calculateCircumference);
const diameterArr = calculate(radiusArr, calculateDiameter);

console.log(areaArr, circumferenceArr, diameterArr);
