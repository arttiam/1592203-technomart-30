const itemSlide = document.querySelectorAll(".item-tool");
const btnBack = document.querySelector(".btn-back");
const btnNext = document.querySelector(".btn-next");
const btnBackImg = document.querySelector(".btn-back-img");
const btnNextImg = document.querySelector(".btn-next-img");

btnBack.addEventListener("click", function() {
  if (!itemSlide[0].classList.contains("index-slide")) {
    btnNext.classList.remove("btn-slide-background");
    btnBack.classList.add("btn-slide-background");
    itemSlide[0].classList.add("index-slide");
    itemSlide[1].classList.remove("index-slide");
    itemSlide[0].classList.remove("appearance-slide");
    void itemSlide[0].offsetWidth;
    itemSlide[0].classList.add("appearance-slide");
  };
});

btnNext.addEventListener("click", function() {
  if (!itemSlide[1].classList.contains("index-slide")) {
    btnNext.classList.add("btn-slide-background");
    btnBack.classList.remove("btn-slide-background");
    itemSlide[1].classList.add("index-slide");
    itemSlide[0].classList.remove("index-slide");
    itemSlide[1].classList.remove("appearance-slide");
    void itemSlide[1].offsetWidth;
    itemSlide[1].classList.add("appearance-slide");
  };
});

btnBackImg.addEventListener("click", function() {
  if (!itemSlide[0].classList.contains("index-slide")) {
    btnNext.classList.remove("btn-slide-background");
    btnBack.classList.add("btn-slide-background");
    itemSlide[0].classList.add("index-slide");
    itemSlide[1].classList.remove("index-slide");
    itemSlide[0].classList.remove("appearance-slide");
    void itemSlide[0].offsetWidth;
    itemSlide[0].classList.add("appearance-slide");
  } else {
    btnNext.classList.add("btn-slide-background");
    btnBack.classList.remove("btn-slide-background");
    itemSlide[1].classList.add("index-slide");
    itemSlide[0].classList.remove("index-slide");
    itemSlide[1].classList.remove("appearance-slide");
    void itemSlide[1].offsetWidth;
    itemSlide[1].classList.add("appearance-slide");
  };
});

btnNextImg.addEventListener("click", function() {
  if (!itemSlide[0].classList.contains("index-slide")) {
    btnNext.classList.remove("btn-slide-background");
    btnBack.classList.add("btn-slide-background");
    itemSlide[0].classList.add("index-slide");
    itemSlide[1].classList.remove("index-slide");
    itemSlide[0].classList.remove("appearance-slide");
    void itemSlide[0].offsetWidth;
    itemSlide[0].classList.add("appearance-slide");
  } else {
    btnNext.classList.add("btn-slide-background");
    btnBack.classList.remove("btn-slide-background");
    itemSlide[1].classList.add("index-slide");
    itemSlide[0].classList.remove("index-slide");
    itemSlide[1].classList.remove("appearance-slide");
    void itemSlide[1].offsetWidth;
    itemSlide[1].classList.add("appearance-slide");
  };
});

