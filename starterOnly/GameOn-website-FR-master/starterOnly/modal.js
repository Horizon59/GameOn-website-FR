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
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.querySelectorAll(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  document.getElementById('first_warning').textContent= '';
  document.getElementById('last_warning').textContent= '';
  document.getElementById('email_warning').textContent= '';
  document.getElementById('quantity_warning').textContent= '';
  document.getElementById('birthdate_warning').textContent= '';
  document.getElementById('location_warning').textContent= '';
  document.getElementById('cgu_warning').textContent= '';
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display="none";
}

/* This function checks all conditions before returning the success message and close modal if they are all respected.
*  Otherwise the form is not closed and a warning is written below the input concerned.  */

function validate() {
    const firstName = document.querySelector("#first").value;
    const lastName = document.querySelector("#last").value;
    const email = document.querySelector("#email").value;
    const quantity = document.querySelector("#quantity").value;
    const locations = document.querySelectorAll('input[name="location"]:checked');
    const cgu = document.querySelector('#checkbox1');
    const birthdate = document.querySelector("#birthdate").value;

    let formIsValid = true;

    if (firstName.length <= 2 || firstName.value === '') {
        document.getElementById('first_warning').textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
        formIsValid = false;
    } else {
        document.getElementById('first_warning').textContent = '';
    }

    if (lastName.length <= 2 || lastName.value === '') {
        document.getElementById('last_warning').textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
        formIsValid = false;
    } else {
        document.getElementById('last_warning').textContent = '';
    }

    if (email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g) === null) {
        document.getElementById('email_warning').textContent = 'Veuillez entrer une adresse mail valide';
        formIsValid = false;
    } else {
        document.getElementById('email_warning').textContent = '';
    }

    if (Number.isInteger(parseInt(quantity)) === false) {
        document.getElementById('quantity_warning').textContent = 'Veuillez saisir une valeur numérique';
        formIsValid = false;
    } else {
        document.getElementById('quantity_warning').textContent = '';
    }

    if (birthdate.match(/^[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/g) === null){
        document.getElementById('birthdate_warning').textContent = 'Veuillez entrer une date valide';
        formIsValid = false;
    } else {
        document.getElementById('birthdate_warning').textContent = '';
    }

    if (locations.length === 0){
        document.getElementById('location_warning').textContent = 'Veuillez choisir une option.'
        formIsValid = false;
    } else {
        document.getElementById('location_warning').textContent = '';
    }

    if (cgu.checked === false){
        document.getElementById('cgu_warning').textContent = 'Veuillez vérifier que vous acceptez les termes et conditions';
        formIsValid = false;
    } else {
        document.getElementById('cgu_warning').textContent = '';
    }

    if (formIsValid === true) {
        alert('Merci ! Votre réservation a été reçue.')
    }

    return formIsValid;
}



