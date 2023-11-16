// Get the body element
const body = document.body;
// Function to change background color on mouse over
function changeBackgroundColorOnMouseOver() {
 body.style.backgroundColor = 'lightblue';
}
// Function to revert background color on mouse out
function revertBackgroundColorOnMouseOut() {
 body.style.backgroundColor = '#f0f0f0';
}
// Function to change background color on focus
function changeBackgroundColorOnFocus() {
 body.style.backgroundColor = 'lightgreen';
}
// Function to revert background color on blur (when focus is lost)

function revertBackgroundColorOnBlur() {
 body.style.backgroundColor = '#f0f0f0';
}
// Add event listeners for mouse over and focus events
body.addEventListener('mouseover', changeBackgroundColorOnMouseOver);
body.addEventListener('mouseout', revertBackgroundColorOnMouseOut);
const inputElement = document.getElementById('changeColorInput');
// Add event listeners for focus and blur events on the input field
inputElement.addEventListener('focus', changeBackgroundColorOnFocus);
inputElement.addEventListener('blur', revertBackgroundColorOnBlur);