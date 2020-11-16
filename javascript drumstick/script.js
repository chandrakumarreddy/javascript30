// play audio if available
function playAudio(e) {
  const keyCode = e.keyCode;
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const key = document.querySelector(`.key[data-key='${keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
window.addEventListener("keydown", playAudio);

// remove transition
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
const keys = document.querySelector(".keys");
keys.addEventListener("transitionend", removeTransition);
