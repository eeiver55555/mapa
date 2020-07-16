let personas = [
  "javier",
  "stiven",
  "jhon",
  "dilan",
  "juan",
  "papa",
  "mama",
  "manzana",
];

let invertido = personas.map(reverseString);

function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

console.log(invertido);
