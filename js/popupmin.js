var writeUs=document.querySelector(".button-contacts"),popupContact=document.querySelector(".modal-contact"),closeContact=document.querySelector(".button-close-contact"),userForm=popupContact.querySelector(".contact-form"),userName=popupContact.querySelector("[name=username]"),userEmail=popupContact.querySelector("[name=email]"),userMessage=popupContact.querySelector("[name=message]"),storageName="",storageEmail="",isStorageSupport=!0;try{storageName=localStorage.getItem("userName"),storageEmail=localStorage.getItem("userEmail")}catch(e){isStorageSupport=!1}writeUs.addEventListener("click",function(e){e.preventDefault(),popupContact.classList.add("modal-show"),storageName?(userName.value=storageName,storageEmail&&(userEmail.value=storageEmail,userMessage.focus())):userName.focus()}),closeContact.addEventListener("click",function(e){e.preventDefault(),popupContact.classList.remove("modal-show")}),userForm.addEventListener("submit",function(e){userName.value&&userEmail.value?isStorageSupport&&(localStorage.setItem("userName",userName.value),localStorage.setItem("userEmail",userEmail.value)):e.preventDefault()}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupContact.classList.contains("modal-show")&&popupContact.classList.remove("modal-show"))});var linkMap=document.querySelector(".map-link"),popupMap=document.querySelector(".modal-map"),closeMap=document.querySelector(".button-close-map");linkMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.add("modal-show")}),closeMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupMap.classList.contains("modal-show")&&popupMap.classList.remove("modal-show"))});
