var writeUs = document.querySelector(".button-contacts");
var popupContact = document.querySelector(".modal-contact");
var closeContact = document.querySelector(".button-close-contact");
var form = popupContact.querySelector(".contact-form");
var userName = popupContact.querySelector("[name=username]");
var email = popupContact.querySelector("[name=email]");
var message = popupContact.querySelector("[name=message]");

writeUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupContact.classList.add("modal-show");
  userName.focus();
});

closeContact.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupContact.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!userName || !email || !message) {
    console.log("Заполните данные формы")
  }
})
