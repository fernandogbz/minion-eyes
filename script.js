// Selecting the eye div
let eyeRef = document.querySelectorAll(".eye");

//Mouse move for devices with mouse and touch move for touch screen devices
let events = ["mousemove","touchmove"];

//Check for touch screen
function isTouchDevice() {
  try{
    document.createElement("touchEvent");
    return true;
  } catch (e) {
    return false;
  }
}