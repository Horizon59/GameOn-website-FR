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
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display="none";
}

// control rules 

// firstname

// function validate(){
//   const firstName = document.querySelector("#first").value;
// if(firstName.length >= 2 && firstName.value != ""){
//   alert('Ok');
  
//  } else {
//   document.getElementById('first_warning').textContent= 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
//   // alert('Veuillez entrer 2 caractères ou plus pour le champ du nom');
//   return false;
  
//  }
// }

function validate() 
{
    const firstName = document.querySelector("#first").value;
    const lastName = document.querySelector("#last").value;
    const email = document.querySelector("#email").value;
    const quantity = document.querySelector("#quantity").value;
    const locations = document.querySelectorAll('input[name="location"]:checked');
    const cgu = document.querySelector('#checkbox1');
    const birthdate = document.querySelector("#birthdate").value;

    document.getElementById('first_warning').textContent =
        firstName.length >= 2 && firstName.value !== ''  ? '' : 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';

    document.getElementById('last_warning').textContent =
        lastName.length >= 2 && lastName.value !== ''  ? '' : 'Veuillez entrer 2 caractères ou plus pour le champ du nom';

    document.getElementById('email_warning').textContent = 
        email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g) !== null ? '' : 'Veuillez entrer une adresse mail valide';

    document.getElementById('quantity_warning').textContent = 
        Number.isInteger(parseInt(quantity)) ? '' : 'Veuillez saisir une valeur numérique' ;

    document.getElementById('birthdate_warning').textContent =
        birthdate.match(/^[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/g) !== null ? '' : 'Veuillez entrer une date valide';

    document.getElementById('location_warning').textContent =
        locations.length > 0 ? '' : 'Veuillez choisir une option.';

    document.getElementById('cgu_warning').textContent =
        cgu.checked === true ? '' : 'Veuillez vérifier que vous acceptez les termes et conditions';

    return false;
}


// document.getElementById('first_warning').innerHTML =
// firstName.lenght <= 2 || "" ? '' : 'Veuillez entrer 2 caractères ou plus pour le champ du nom';

