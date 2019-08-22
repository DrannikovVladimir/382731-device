var tabButtons = document.querySelectorAll('.service-button');

tabButtons.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    evt.preventDefault();
    var id = this.getAttribute('data-tab');
    var content = document.querySelector('.service-description[data-tab="' + id + '"]');
    var currentButton = document.querySelector('.service-button.current');
    var currentContent = document.querySelector('.service-description-current');

    currentContent.classList.remove('service-description-current');
    content.classList.add('service-description-current');

    currentButton.classList.remove('current');
    item.classList.add('current');
  });
});
