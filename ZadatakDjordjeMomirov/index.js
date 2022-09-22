let numberOfDots = prompt("Please enter your number of vertices of a polygon");
let coordinates = [];
let dotCheck = [];

if (numberOfDots != null) {
  document.getElementById(
    "numDots"
  ).innerHTML = `Number of vertices ${numberOfDots}`;
}

for (let i = 0; i < numberOfDots; i++) {
  let x = prompt(
    `Please insert the coordinate of x for vertice number ${[i + 1]}`
  );
  let y = prompt(
    `Please insert the coordinate of y for vertice number ${[i + 1]}`
  );
  saveCoordinates(Number(x), Number(y));
}

function saveCoordinates(x, y) {
  coordinates.push([x, y]);
}

if (coordinates.length) {
  for (i = 0; i < coordinates.length; i++) {
    document.getElementById(
      "cordsDots"
    ).innerHTML += `Coordinates for vertice ${i + 1} are ${
      coordinates[i]
    } </br>`;
  }
}

alert(
  "Insert the coordinates so we could check is that dot in side of a polygon"
);

let xToCheck = prompt(`Please insert the coordinate of x for checking dot`);
let yToCheck = prompt(`Please insert the coordinate of y for checking dot`);

saveCoordinates_dot_to_check(Number(xToCheck), Number(yToCheck));

function saveCoordinates_dot_to_check(xToCheck, yToCheck) {
  dotCheck.push(xToCheck);
  dotCheck.push(yToCheck);
}

if (dotCheck != null) {
  document.getElementById(
    "cordsDot"
  ).innerHTML += `Coordinates of dot to check are ${dotCheck}`;
}

function checkIfDotIsInPoligon(dot, polygon) {
  const length = polygon.length;

  if (length < 3) {
    return false;
  }

  let pos = 0;
  let neg = 0;

  for (let i = 0; i < length; i++) {
    if (polygon[i] == dot) {
      return true;
    }

    let x1 = polygon[i][0];
    let y1 = polygon[i][1];

    let i2 = (i + 1) % length;

    let x2 = polygon[i2][0];
    let y2 = polygon[i2][1];

    let x = dot[0];
    let y = dot[1];

    let d = (x - x1) * (y2 - y1) - (y - y1) * (x2 - x1);

    if (d > 0) pos++;
    if (d < 0) neg++;

    if (pos > 0 && neg > 0) return false;
  }

  return true;
}

let check = checkIfDotIsInPoligon(dotCheck, coordinates);

if (check) {
  document.getElementById("dotIsInOrOut").innerHTML += `Dot is in the polygon`;
} else {
  document.getElementById(
    "dotIsInOrOut"
  ).innerHTML += `Dot is out of the polygon`;
}
