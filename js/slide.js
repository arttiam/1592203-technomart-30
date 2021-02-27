const itemSlide = document.querySelectorAll(".item-tool");
const dots = document.querySelectorAll(".btn-slide");
const btnBackImg = document.querySelector(".btn-back-img");
const btnNextImg = document.querySelector(".btn-next-img");
let activeDot = document.querySelector(".btn-slide-background");
let activeSlide = document.querySelector(".index-slide");

for (let i = 0; i < itemSlide.length; i++) {

  dots[i].addEventListener("click", function(e) {

    if (e.target.classList.contains("btn-slide-background")) {
      return
    };

    activeDot.classList.remove("btn-slide-background");
    e.target.classList.add("btn-slide-background");
    activeDot = e.target;
    activeSlide.classList.remove("index-slide");
    itemSlide[i].classList.add("index-slide");
    activeSlide = itemSlide[i];
  
  });

};


btnNextImg.addEventListener ("click", function () {
  var nextSlide = activeSlide.nextElementSibling;
  if (!nextSlide) {
    activeSlide.classList.remove("index-slide");
    itemSlide[0].classList.add("index-slide");
    activeSlide = itemSlide[0];
    activeDot.classList.remove("btn-slide-background");
    dots[0].classList.add("btn-slide-background");
    activeDot = dots[0];
  } else {
    activeSlide.classList.remove("index-slide");
    nextSlide.classList.add("index-slide");
    activeSlide = nextSlide;
    var nextDot = activeDot.nextElementSibling;
    nextDot.classList.add("btn-slide-background");
    activeDot.classList.remove("btn-slide-background");
    activeDot = nextDot;          
  }
});

btnBackImg.addEventListener("click",function () {
  let prevSlide = activeSlide.previousElementSibling;
  if (!prevSlide) {
    activeSlide.classList.remove("index-slide");
    activeSlide = itemSlide[itemSlide.length-1];
    activeSlide.classList.add("index-slide");
    activeDot.classList.remove("btn-slide-background");
    activeDot = dots[dots.length-1];
    activeDot.classList.add("btn-slide-background");
  } else {
    activeSlide.classList.remove("index-slide");
    activeSlide = prevSlide;
    activeSlide.classList.add("index-slide");
    let prevDot = activeDot.previousElementSibling;
    activeDot.classList.remove("btn-slide-background");
    activeDot = prevDot;
    activeDot.classList.add("btn-slide-background");
  }
});