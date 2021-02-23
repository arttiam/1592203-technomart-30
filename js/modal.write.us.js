const modal = document.querySelector(".modal-write-us");
const linkContacts = document.querySelector(".link-contacts");
const closeModal = modal.querySelector(".btn-close-modal");
const inputName = modal.querySelector(".input-name");
const inputEmail = modal.querySelector(".input-email");
const textModal = modal.querySelector(".text-mail-modal");


linkContacts.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("hiding-content");
});

closeModal.addEventListener("click", function() {
    modal.classList.add("hiding-content");
});

