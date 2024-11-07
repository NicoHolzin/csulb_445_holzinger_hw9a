//Create a circle.js module exporting two functions circumference() and area(), each taking the circle radius as a parameter.

function circumference (radius) {
  return 2 * Math.PI * radius
}

function area (radius) {
  return Math.PI * radius **2
}

module.exports = {
  circumference,
  area
};

