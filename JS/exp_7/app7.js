let userArray = [];
// Function to get array elements from the user
function getArrayElements() {
 const arrayLength = parseInt(document.getElementById("arrayLength").value);
 userArray = [];
 const arrayInputDiv = document.getElementById("arrayInput");
 arrayInputDiv.innerHTML = "";
 for (let i = 0; i < arrayLength; i++) {
 const input = document.createElement("input");
 input.type = "text";
 input.placeholder = `Element ${i + 1}`;
 arrayInputDiv.appendChild(input);
 }
 const addElementsButton = document.createElement("button");
 addElementsButton.textContent = "Add Elements";
 addElementsButton.onclick = () => {
 userArray = Array.from(arrayInputDiv.querySelectorAll("input")).map(input =>
 input.value);
 displayArray();
 };
 arrayInputDiv.appendChild(addElementsButton);
}
// Function to display the array
function displayArray() {
 const arrayOutputDiv = document.getElementById("arrayOutput");
 arrayOutputDiv.innerHTML = `Array: [${userArray.map(obj =>
 JSON.stringify(obj)).join(", ")}]`;
}
// Function to create and display the table
function createAndDisplayTable() {
 const tableBody = document.getElementById("arrayTableBody");
 tableBody.innerHTML = "";
 for (let i = 0; i < userArray.length; i++) {
 const element = userArray[i];
 const dataType = typeof element;
 const isArray = Array.isArray(element);
 const row =
 `<tr><td>${JSON.stringify(element)}</td><td>${dataType}</td><td>${isArray}</td></tr>`;
 tableBody.innerHTML += row;
}
}
// Function to display the object pair
function displayAndAddObjectPair() {
const object1 = document.getElementById("object1").value;
const object2 = document.getElementById("object2").value;
const objectPair = { object1, object2 };
displayObjectPair(objectPair);
}
// Function to display the object pair
function displayObjectPair(objectPair) {
const objectPairOutputDiv = document.getElementById("objectPairOutput");
objectPairOutputDiv.innerHTML = `Object Pair: { object1: "${objectPair.object1}",
object2: "${objectPair.object2}" }`;
}
// Function to append the object pair to the array
function appendObjectPair() {
const object1 = document.getElementById("object1").value;
const object2 = document.getElementById("object2").value;
const objectPair = { object1, object2 };
userArray.push(objectPair);
// Display the updated array
displayArray();
}
// Function to reset the form
function resetForm() {
userArray = [];
document.getElementById("arrayLength").value = ''; // Clear the input field for array length
document.getElementById("arrayInput").innerHTML = ''; // Clear the input fields for array 
elements
document.getElementById("arrayOutput").textContent = ''; // Clear the display for the array
document.getElementById("object1").value = ''; // Clear the input field for the first object
document.getElementById("object2").value = ''; // Clear the input field for the second object
document.getElementById("objectPairOutput").textContent = ''; // Clear the display for the object 
pair
const tableBody = document.getElementById("arrayTableBody");
tableBody.innerHTML = ''; // Clear the table body
}
