let coutDownDate = new Date('Dec 31, 2024 23:59:59').getTime();
console.log(coutDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find the Date Difference Between Now And countdown Date
  let dateDiff = coutDownDate - dateNow;

  // Calculate days, hours, minutes, and seconds
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` :days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` :hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` :minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` :seconds;

  // Check if the countdown has reached zero
  if (dateDiff <= 0) {
    clearInterval(counter); // Stop the countdown when it reaches zero
 
  }
}, 1000);
