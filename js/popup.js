var writeUs = document.querySelector(".button-contacts");
var popupContact = document.querySelector(".modal-contact");
var closeContact = document.querySelector(".button-close-contact");

var userForm = popupContact.querySelector(".contact-form");
var userName = popupContact.querySelector("[name=username]");
var userEmail = popupContact.querySelector("[name=email]");
var userMessage = popupContact.querySelector("[name=message]");

var storageName = "";
var storageEmail = "";
var isStorageSupport = true;

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupContact.classList.add("modal-show");
  if (storageName) {
    userName.value = storageName;
    if (storageEmail) {
      userEmail.value = storageEmail;
      userMessage.focus();
    }
  } else {
    userName.focus();
  }
});

closeContact.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupContact.classList.remove("modal-show");
  popupContact.classList.remove("modal-error");
});

userForm.addEventListener("submit", function(evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popupContact.classList.remove("modal-error");
    popupContact.offsetWidth = popupContact.offsetWidth;
    popupContact.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupContact.classList.contains("modal-show")) {
      popupContact.classList.remove("modal-show");
      popupContact.classList.remove("modal-error");
    }
  }
});

var linkMap = document.querySelector(".map-link");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".button-close-map");

linkMap.classList.remove("map-link-no-js");

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});
