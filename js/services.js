const btnOffers = document.querySelectorAll(".button-offers");
const advantageTabs = document.querySelectorAll(".advantage-tabs-item");
let activeBtnOffer = document.querySelector(".button-offers-click");
let activeAdvantageTabs = document.querySelector(".index-tabs")

for (let i = 0; i < btnOffers.length; i++) {
  btnOffers[i].addEventListener("click", function(e) {
    if (e.target.classList.contains("button-offers-click")) {return};

    activeBtnOffer.classList.remove("button-offers-click");
    activeBtnOffer.classList.add("button-offers-rest");
    e.target.classList.add("button-offers-click");
    e.target.classList.remove("button-offers-rest");
    advantageTabs[i].classList.remove("hiding-content");
    advantageTabs[i].classList.add("index-tabs");
    activeAdvantageTabs.classList.remove("index-tabs");
    activeAdvantageTabs.classList.add("hiding-content");
    activeAdvantageTabs = advantageTabs[i];
    activeBtnOffer = e.target;
  })
};