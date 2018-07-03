var mapLink = document.querySelector(".map-link");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".button-close-map");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});
