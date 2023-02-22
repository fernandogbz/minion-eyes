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

//Same function for both events
events.forEach((eventType) => {
  document.body.addEventListener(eventType, (event) => {
    eyeRef.forEach((eye) => {
      /*getBoundingClientRect() method returns the position relative to the viewport*/
      let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

      /* ClientX and ClientY return the position of clients cursor from top left of the screen */
      let x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
      let y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;
      console.log(x,y)

      /*
      Subtract "x" position of mouse from "x" position of eye and "y" position of mouse from "y" position of eye.
      Use atan2(returns angle in radians)
      */
      let radian = Math.atan2(x - eyeX, y - eye Y);
  });
  });
});