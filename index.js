// Listening for click in every button
const buttons = document.querySelectorAll(".drum");
//Audio object
let audio = "";
// For loop useful to detect every button
for (let i = 0; i < buttons.length; i++) {
  //this query selector all method returns an array so we must iterate inside it
  buttons[i].addEventListener("click", function () {
    // Play sound
    //audio.play();
    // to get the Identity of the button that got clicked use "this"
    //Using switch statement to play a different sound depending on button
    const buttonText = this.textContent;
    switch (buttonText) {
      case "w":
        audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;

      case "a":
        audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;

      case "s":
        audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;

      case "d":
        audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;

      case "j":
        audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;

      case "k":
        audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;

      case "l":
        audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;

      default:
        HTMLFormControlsCollection.log(buttonText);
        break;
    }
  });
}
