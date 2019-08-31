'use strict';

(function() {
  var sliderButton = document.querySelectorAll('.slide-button');
  console.log(sliderButton);

  sliderButton.forEach(function(button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      var id = this.getAttribute('data-slider');
      var content = document.querySelector('.slider-item[data-slider="'+ id +'"]');
      var activeContent = document.querySelector('.slider-item-current');
      activeContent.classList.remove('slider-item-current');
      content.classList.add('slider-item-current');
      var activeElement = document.querySelector('.slide-button-current');
      activeElement.classList.remove('slide-button-current');
      button.classList.add('slide-button-current');
    })
  });
})();
