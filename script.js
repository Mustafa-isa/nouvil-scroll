// catch images
const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountain3 = document.getElementById("mountain3");
const mountain4 = document.getElementById("mountain4");
const river = document.getElementById("river");
const boat = document.getElementById("boat");
function onScrollPage() {
  console.log(scrollY);
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 2 + "px";
  mountain3.style.top = value * 1 + "px";
  mountain4.style.top = value + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 2 + "px";
  if (scrollY >= 128) {
    document.querySelector(".main").style.background =
      "linear-gradient(#376281,#1001f)";
  }else{
    document.querySelector(".main").style.background =
    "linear-gradient(#3b0442 ,#080d6d);";
  }
}

// add event scroll to window
window.addEventListener("scroll", onScrollPage);

// make header responsive for all screens
let barToggle = document.querySelector(".barToggle");
const ul = document.querySelector("ul");
// make a check for window width
function handleResponsive() {
  if (window.innerWidth > 768) {
    barToggle.style.opacity = 0;
    ul.classList.remove("ulResponsive");
  } else if (window.innerWidth <= 768) {
    barToggle.style.opacity = 1;
    ul.classList.add("ulResponsive");
  }
}

// show nav

function showNav(e) {
  ul.classList.toggle("activeul");

  // check if class activeul is exist or not
  var hasClassUlActive = ul.classList.contains("activeul");

  if (hasClassUlActive) {
    e.target.classList.replace("fa-bars", "fa-x");
    console.log("show x");
  } else if (!hasClassUlActive) {
    console.log("show bar");
    e.target.classList.replace("fa-x", "fa-bars");
  }

  console.log(hasClassUlActive);
}

barToggle.addEventListener("click", showNav);
// inializing the function
handleResponsive();

// add function to the eventListner
window.addEventListener("resize", handleResponsive);
