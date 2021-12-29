function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function closeModal() {
  modalbg.style.display = "none";
}

// regex

//If (formData.querySelector(".first").value 

// validate 
function validate() {
 const first = document.querySelector("#first").value ;
 const last = document.querySelector("#last").value ;
 const email = document.querySelector("#email").value ;
 const quantity = document.querySelector("#quantity").value ;
 const locations = document.querySelectorAll('input[name="location"]');
 const cgu = document.querySelector("#checkbox1");
 let hasError = false;

 if (checkNames(first) === false) {
  hasError = true;
 }

 if (checkNames(last) === false) {
  hasError = true;
 }


 if (checkEmail(email) === false) {
     hasError = true;
 }
 if (checkQuantity(quantity) === false) {
     hasError = true;
 }

 if (checkLocation(locations) === false){
     hasError = true;
 }

 if (checkCgu(cgu) === false){
     hasError = true;
 }


 if(false === hasError) {
   alert ('Pas d\'ereur');
 } else {
  alert ('Erreur');
 }

}

function checkNames(name){
  return name.length >= 2 && name !== "";
}
function checkQuantity(quantity){
  return Number.isInteger(parseInt(quantity));
}

function checkEmail(email){
    return  email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) !== null;
}

function checkLocation(locations){
    let oneChecked = false;

    locations.forEach((input) => {
        if (input.checked === true) {
            oneChecked = true;
        }
    });

    return oneChecked === true;
}

function checkCgu(cgu){
    return cgu.checked === true;
}
