//your code here
// Get the clock hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
  // Get current time
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate degrees for each hand
  const hourDegrees = ((hours % 12) / 12) * 360 + 90;
  const minuteDegrees = (minutes / 60) * 360 + 90;
  const secondDegrees = (seconds / 60) * 360 + 90;

  // Apply rotation to hands
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

// Call setClock function every second
setInterval(setClock, 1000);
