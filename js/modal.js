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

linkModalWrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWrite.classList.remove("not-filled");
  inputEmail.classList.remove('not-filled-shadow');
  inputName.classList.remove('not-filled-shadow');
  textMail.classList.remove('not-filled-shadow');
  modalWrite.classList.remove("hiding-content");
});

btnClose.addEventListener("click", function() {
  modalWrite.classList.add("hiding-content");
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (!modalWrite.classList.contains("hiding-content")) {
      modalWrite.classList.add("hiding-content");
    };
    if (!modalMap.classList.contains("visually-hidden")) {
      modalMap.classList.add("visually-hidden");
    };
  };
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
      modalWrite.classList.add("not-filled");
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

linkModalMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("visually-hidden");
});

btnCloseMap.addEventListener("click", function() {
  modalMap.classList.add("visually-hidden");
});