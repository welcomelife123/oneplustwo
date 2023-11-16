// Function to change the background color on mouseover
function changeBackgroundColorOnMouseOver() {
  document.getElementById("body").style.backgroundColor = "lightblue";
}
// Function to change the background color on focus
function changeBackgroundColorOnFocus() {
  document.getElementById("body").style.backgroundColor = "lightgreen";
}
// Function to reset the background color
function resetBackgroundColor() {
  document.getElementById("body").style.backgroundColor = "white";
}
// Attach event listeners for mouseover and mouseout
document.getElementById("body").addEventListener("mouseover",
  changeBackgroundColorOnMouseOver);
document.getElementById("body").addEventListener("mouseout", resetBackgroundColor);
// Function to handle the focus event
function handleFocusEvent() {
  changeBackgroundColorOnFocus();
}

