let coutDownDate = new Date('Dec 31, 2024 23:59:59').getTime();

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

// Our-Skills Effect Scrolling 
let section = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");

window.onscroll = () => {
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};


//Number Count Stats
document.addEventListener("DOMContentLoaded", () => {
  const numbers = document.querySelectorAll(".stats .box .number");

  function startCount(el) {
    const goal = parseInt(el.dataset.goal);
    const increment = goal > 1000 ? Math.ceil(goal / 100) : 1;

    let current = 0;
    const count = setInterval(() => {
      current += increment;
      el.textContent =
        current >= goal ? formatNumber(goal) : formatNumber(current);
      if (current >= goal) clearInterval(count);
    }, 20);
  }
//this function to change numbers like 1,500 ==> 1,5K 
  function formatNumber(number) {
    const suffixes = ["", "K", "M"];
    let suffixIndex = 0;

    while (number >= 1000) {
      number /= 1000;
      suffixIndex++;
    }

    return `${number.toFixed(1).replace(/\.0$/, "")}${suffixes[suffixIndex]}`;
  }

  numbers.forEach(startCount);
});

//Hide and Show Mega Menu With Using Event When using Mouse 
document.addEventListener("DOMContentLoaded", () => {
  const otherLinks = document.querySelector(
    '.header .main-nav li a[href="#other_links"]'
  );
  const megaMenu = document.querySelector(".header .mega-menu");

  const showMegaMenu = () => {
    megaMenu.style = "opacity: 1; top: calc(100% + 1px); z-index: 100;";
  };

  const hideMegaMenu = () => {
    megaMenu.style = "opacity: 0; top: calc(100% + 50px); z-index: -1;";
  };

  otherLinks.addEventListener("mouseenter", showMegaMenu);

  otherLinks.addEventListener("click", (event) => {
    event.preventDefault();
    megaMenu.style.opacity !== "1" ? showMegaMenu() : hideMegaMenu();
  });

  megaMenu.addEventListener("mouseleave", hideMegaMenu);
});
