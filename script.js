const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;
function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer)

  setTimeout(function () {

    if (index == txtsLen - 1) {
      index = 0;
    }
    else {
      index++;
    }
    animateText();
  }, textInTimer);
}
window.onload = animateText;

const sliders = document.querySelectorAll(".image-comparison .slider");
const beforeImage = document.querySelectorAll(".image-comparison .before-image");
const sliderLine = document.querySelectorAll(".image-comparison .slider-line")
const sliderIcon = document.querySelectorAll(".image-comparison .slider-icon")
sliders.forEach((slider, index) => {
  slider.addEventListener("input", (e) => {
    let sliderValue = e.target.value + "%";
    beforeImage[index].style.width = sliderValue;
    sliderLine[index].style.left = sliderValue;
    sliderIcon[index].style.left = sliderValue;
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  var listItems = document.getElementsByClassName("nl");
  var logo = document.getElementsByClassName("log");
  var btn = document.getElementsByClassName("navbar-toggler");
  if (window.innerWidth > 572) {
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].classList.toggle("white", window.scrollY > 0);
    }
    for (var i = 0; i < logo.length; i++) {
      logo[i].classList.toggle("white", window.scrollY > 0);
    }
    for (var i = 0; i < logo.length; i++) {
      btn[i].classList.toggle("nav-toggler-white", window.scrollY > 0);
    }

    header.classList.toggle("sticky", window.scrollY > 0);
  }
  else {
    // header.classList.add("sticky");
    // for (var i = 0; i < listItems.length; i++) {
    //   listItems[i].classList.add("white");
    // }   
    // for (var i = 0; i < logo.length; i++) {
    //   logo[i].classList.add("white");
    // }
    // for (var i = 0; i < logo.length; i++) {
    //   btn[i].classList.add("nav-toggler-white");
    // } 
  }
});   
