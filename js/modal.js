const modalWrite = document.querySelector(".modal-write-us");
const linkModalWrite = document.querySelector(".link-contacts");
const btnSubmit = document.querySelector(".style-btn-send-modal");
const btnClose = document.querySelector(".btn-modal-write-us");
const inputName = document.querySelector(".input-name");
const inputEmail = document.querySelector(".input-email");
const textMail = document.querySelector(".text-mail-modal");
const modalMap = document.querySelector(".modal-map");
const linkModalMap = document.querySelector(".link-map-contacts");
const btnCloseMap = document.querySelector(".btn-modal-map");
const storageName = localStorage.getItem("name");
const storageEmail = localStorage.getItem("email");
const btnBuys = document.querySelectorAll(".btn-buy");
const modalBuy = document.querySelector(".modal-product-added");
const buyClose = document.querySelector(".btn-modal-product-added");
const continueShopping = document.querySelector(".continue-shopping");
let isStorageSupport = true;
let storage = "";

for (btnBuy of btnBuys) {
  btnBuy.addEventListener("click", function() {
    modalBuy.classList.remove("visually-hidden");
  });
};

continueShopping.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalBuy.classList.add("visually-hidden");
});

buyClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalBuy.classList.add("visually-hidden");
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (!modalBuy.classList.contains("visually-hidden")) {
      modalBuy.classList.add("visually-hidden");
    };
  };
});

if (document.querySelector(".modal-write-us")) {

  linkModalWrite.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWrite.classList.remove("hiding-content");
    modalWrite.classList.add("opening-modal");
    inputName.focus();
    if (storageName) {
      inputName.value = storageName;
    } else {
      inputName.value = "";
    };
    if (storageEmail) {
      inputEmail.value = storageEmail;
    } else {
      inputEmail.value = "";
    };
    textMail.value = "";
  });

  btnClose.addEventListener("click", function() {
    modalWrite.classList.remove("not-filled");
    inputEmail.classList.remove('not-filled-shadow');
    inputName.classList.remove('not-filled-shadow');
    textMail.classList.remove('not-filled-shadow');
    modalWrite.classList.add("hiding-content");
  });

  btnSubmit.addEventListener("click", function(evt) {
    if ((inputEmail.value === "") || (inputName.value === "")  || (textMail.value === "")) {
      evt.preventDefault();
  
      if (inputEmail.value === "") {
        inputEmail.classList.add('not-filled-shadow');
      };
      if (inputName.value === "") {
        inputName.classList.add('not-filled-shadow');
      };
      if (textMail.value === "") {
        textMail.classList.add('not-filled-shadow');
      };
  
      if (modalWrite.classList.contains("not-filled")) {
        modalWrite.classList.remove("not-filled");
      };
      modalWrite.classList.remove("opening-modal");
      void modalWrite.offsetWidth;
      modalWrite.classList.add("not-filled");
    } else {
      try {
        storage = localStorage("name", inputName.value);
      } catch (err) { 
        isStorageSupport = false;  
      };
      if (isStorageSupport) {
        localStorage("email", inputEmail.value);
      };
    };
  });
  window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
      if (!modalWrite.classList.contains("hiding-content")) {
        modalWrite.classList.remove("not-filled");
        inputEmail.classList.remove('not-filled-shadow');
        inputName.classList.remove('not-filled-shadow');
        textMail.classList.remove('not-filled-shadow');
        modalWrite.classList.add("hiding-content");
      };
    };
  });

  inputName.addEventListener("focus", function() {
    inputName.classList.remove("not-filled-shadow");
    textMail.classList.remove("not-filled-shadow");
    inputEmail.classList.remove("not-filled-shadow");
  });
  
  inputEmail.addEventListener("focus", function() {
    inputEmail.classList.remove("not-filled-shadow");
    textMail.classList.remove("not-filled-shadow");
    inputName.classList.remove("not-filled-shadow");
  });
  
  textMail.addEventListener("focus", function() {
    textMail.classList.remove("not-filled-shadow");
    inputName.classList.remove("not-filled-shadow");
    inputEmail.classList.remove("not-filled-shadow");
  });
};

if (document.querySelector(".modal-map")) {

  linkModalMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.remove("visually-hidden");
    modalMap.classList.add("opening-modal-map");
  });

  btnCloseMap.addEventListener("click", function() {
    modalMap.classList.add("visually-hidden");
    modalMap.classList.remove("opening-modal-map");
  });

  window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
      if (!modalMap.classList.contains("visually-hidden")) {
        modalMap.classList.add("visually-hidden");
        modalMap.classList.remove("opening-modal-map");
      };
    };
  });

};