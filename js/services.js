const btnOffers = document.querySelectorAll(".button-offers");
const advantageTabs = document.querySelectorAll(".advantage-tabs-item");

btnOffers[0].addEventListener("click", function() {
  advantageTabs[0].classList.remove("hiding-content");
  advantageTabs[1].classList.add("hiding-content");
  advantageTabs[2].classList.add("hiding-content");
  btnOffers[0].classList.add("button-offers-click");
  btnOffers[0].classList.remove("button-offers-rest");
  btnOffers[1].classList.remove("button-offers-click");
  btnOffers[1].classList.add("button-offers-rest");
  btnOffers[2].classList.remove("button-offers-click");
  btnOffers[2].classList.add("button-offers-rest");
});

btnOffers[1].addEventListener("click", function() {
  advantageTabs[1].classList.remove("hiding-content");
  advantageTabs[0].classList.add("hiding-content");
  advantageTabs[2].classList.add("hiding-content");
  btnOffers[1].classList.add("button-offers-click");
  btnOffers[1].classList.remove("button-offers-rest");
  btnOffers[0].classList.remove("button-offers-click");
  btnOffers[0].classList.add("button-offers-rest");
  btnOffers[2].classList.remove("button-offers-click");
  btnOffers[2].classList.add("button-offers-rest");
});

btnOffers[2].addEventListener("click", function() {
  advantageTabs[2].classList.remove("hiding-content");
  advantageTabs[0].classList.add("hiding-content");
  advantageTabs[1].classList.add("hiding-content");
  btnOffers[2].classList.add("button-offers-click");
  btnOffers[2].classList.remove("button-offers-rest");
  btnOffers[0].classList.remove("button-offers-click");
  btnOffers[0].classList.add("button-offers-rest");
  btnOffers[1].classList.remove("button-offers-click");
  btnOffers[1].classList.add("button-offers-rest");
});

      /*if (btnOffer.contains === "Гарантия") {
        advantageTabs[1].classList.remove("hiding-content");
        advantageTabs[0].classList.add("hiding-content");
        advantageTabs[2].classList.add("hiding-content");
        btnOffer.classList.add("button-offers-click");
        btnOffer.classList.remove("button-offers-rest");
        btnOffers[0].classList.remove("button-offers-click");
        btnOffers[0].classList.add("button-offers-rest");
        btnOffers[2].classList.remove("button-offers-click");
        btnOffers[2].classList.add("button-offers-rest");
      };
      if (btnOffer.contains === "Кредит") {
        advantageTabs[2].classList.remove("hiding-content");
        advantageTabs[0].classList.add("hiding-content");
        advantageTabs[1].classList.add("hiding-content");
        btnOffer.classList.add("button-offers-click");
        btnOffer.classList.remove("button-offers-rest");
        btnOffers[0].classList.remove("button-offers-click");
        btnOffers[0].classList.add("button-offers-rest");
        btnOffers[1].classList.remove("button-offers-click");
        btnOffers[1].classList.add("button-offers-rest");
      };
    });
}*/