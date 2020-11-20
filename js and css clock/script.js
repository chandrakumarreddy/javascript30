const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");
function currentTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegree = (seconds / 60) * 360 + 90;
  const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  hoursHand.style.transform = `rotate(${hourDegree}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(currentTime, 1000);
