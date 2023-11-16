
let userArray = [];
// Function to create an array based on user input 
function createArray() {
  const arrayLength =
    parseInt(document.getElementById("arrayLength").value);
  userArray = [];
  for (let i = 0; i < arrayLength; i++) {
    userArray.push("");
  }
  document.getElementById("displayArrayCreate").textContent = `Array 
created: [${userArray.join(", ")}]`;
}
// Function to add an element to the array 
function addElement() {
  const arrayElement = document.getElementById("arrayElement").value;
  const index = userArray.indexOf("");
  if (index !== -1) {
    userArray[index] = arrayElement;
  }
  document.getElementById("displayArrayAdd").textContent = `Element 
added: [${userArray.join(", ")}]`;
}
// Function to display the created array 
function displayArray() {
  document.getElementById("displayArray").textContent = `Array: 
[${userArray.join(", ")}]`;
}
// Function to remove an element from the array using a loop (Custom Method)
function removeElementCustom() {
  const elementToRemove =
    document.getElementById("elementToRemove").value;
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] === elementToRemove) {
      userArray.splice(i, 1);
      break;
    }
  }
  document.getElementById("displayArrayRemoveCustom").textContent =
    `Element removed: [${userArray.join(", ")}]`;
}
// Function to remove an element from the array using splice method (Splice Method)
function removeElementSplice() {
  const elementToRemove =
    document.getElementById("elementToRemoveSplice").value;
  const index = userArray.indexOf(elementToRemove);
  if (index !== -1) {
    userArray.splice(index, 1);
    document.getElementById("displayArrayRemoveSplice").textContent =
      `Element removed: [${userArray.join(", ")}]`;
  }
}
// Function to check if an element exists in the array using a loop (Custom Method)
function checkElementCustom() {
  const elementToCheck = document.getElementById("elementToCheck").value;
  let exists = false;
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] === elementToCheck) {
      exists = true;
      break;
    }
  }
  if (exists) {
    document.getElementById("displayArrayCheckCustom").textContent =
      `${elementToCheck} exists in the array.`;
  } else {
    document.getElementById("displayArrayCheckCustom").textContent =
      `${elementToCheck} does not exist in the array.`;
  }
}
// Function to check if an element exists in the array using includes method(Includes Method)
function checkElementIncludes() {
  const elementToCheck =
    document.getElementById("elementToCheckIncludes").value;
  const exists = userArray.includes(elementToCheck);
  if (exists) {
    document.getElementById("displayArrayCheckIncludes").textContent =
      `${elementToCheck} exists in the array.`;
  } else {
    document.getElementById("displayArrayCheckIncludes").textContent =
      `${elementToCheck} does not exist in the array.`;
  }
}
// Function to empty the array (Custom Method) 
function emptyArrayCustom() {
  userArray = [];
  document.getElementById("displayArrayEmptyCustom").textContent = "Array is now empty.";
}
// Function to empty the array by reassignment (Reassignment) 
function emptyArrayReassign() {
  userArray = [];
  document.getElementById("displayArrayEmptyReassign").textContent =
    "Array is now empty.";
}
