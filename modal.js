function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const MODALBG = document.querySelector(".bground");
const MODALBTN = document.querySelectorAll(".modal-btn");
const FORMDATA = document.querySelectorAll(".formData");
// Ajout de la varibale bouton close (pers.)
const CLOSEBTN = document.querySelectorAll(".close");

// launch modal event
MODALBTN.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  MODALBG.style.display = "block";
}


// close modal event (pers.)
CLOSEBTN.forEach((btn) => btn.addEventListener("click", closeModal));
//close modal form (pers.)
function closeModal() {
  MODALBG.style.display = "none";
}

let checkbox1 = document.getElementById("checkbox1");
let labelCheckbox1 = document.getElementById("label-checkbox1");
let btnSubmit = document.getElementById("bouton_submit");

//Création de la balise contenant le message d'erreur CG (pers.)
var messageErreurCg = document.createElement('div');
messageErreurCg.setAttribute("id", "messageErreurCg")
//Ajout du texte du message d'erreur CG (pers.)
let labelCg = document.createTextNode("Veuillez accépter les conditions d'utilisation");
//LabelCg devient enfant de messageErreurCg (pers.)
messageErreurCg.appendChild(labelCg);
// Integration message d'erreur sur l'input CG (pers.)
labelCheckbox1.appendChild(messageErreurCg);
// Disparition du message d'erreur (pers.)
messageErreurCg.style.display = "none";




//On désactive le message d'erreur firstname
let msgErrorFirst = document.getElementById("msgErrorFirst");
msgErrorFirst.style.display = "none";
//On vérifie la validité du firstname (pers.)
function verifFirst () {
  let firstValue = document.getElementById("first").value;
  if (firstValue !== null && firstValue.length >= 2) {
    return true;
  }
  else {
    return false;
  }
};

//On désactive le message d'erreur lastname
let msgErrorLast = document.getElementById("msgErrorLast");
msgErrorLast.style.display = "none";
//On vérifie la validité du lastname (pers.)
function verifLast () {
  let lastValue = document.getElementById("last").value;
  if (lastValue !== null && lastValue.length >= 2) {
    return true;
  }
  else {
    return false;
  }
};

//Création du regex pour la vérification de l'email
const EMAIL_REGEX = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "i");
let msgErrorEmail = document.getElementById("msgErrorEmail");
msgErrorEmail.style.display = "none";
// On vérifie si l'email est valide
function verifEmail() {
  let emailValue = document.getElementById("email").value;
  if (EMAIL_REGEX.test(emailValue)) {
    return true;
  }
  else {
    return false;
  }
}

// On désactive le message d'erreur de la Birthdate
const DATE_REGEX = new RegExp (/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/);
let msgErrorBirthdate = document.getElementById("msgErrorBirthdate");
msgErrorBirthdate.style.display = "none";
// On vérifie si la date de naissace a bien été saisie
function verifBirthdate() {
  let birthdateValue = document.getElementById("birthdate").value;
  if (DATE_REGEX.test(birthdateValue)) {
    return true;
  }
  else {
    return false;
  }
}

//On désactive le message d'erreur quantity
let msgErrorQuantity = document.getElementById("msgErrorQuantity");
msgErrorQuantity.style.display = "none";
//On vérifie la validité de quantity (pers.)
function verifQuantity () {
  let quantityValue = document.getElementById("quantity").value;
  if (quantityValue !== null) {
    return true;
  }
  else {
    return false;
  }
};

//On vérifie si les CG sont cochées (pers.)
function verifCg() {
  let x = checkbox1.checked;
  let result;
  if(x) {
    result = true;
  }
  else {
    result = false;
  }
  return result;
};

/* function checkErrors () {
  let errors = [];
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");
  let email = document.getElementById("email");
  let birthdate = document.getElementById("birthdate");
  let quantity = document.getElementById("quantity");
  let radios = document.querySelectorAll("input[type=radio]");
  console.log(radios);

  // Vérification du prénom 
  if (firstName.value === null || firstName.value.length < 2) {
    let error = {
      message: "Champ obligatoire"
    };
  }
}; */

/* function submitForm () {
  checkErrors();
  if (verifFirst()) {
    msgErrorFirst.style.display = "none";
  }
  else {
    msgErrorFirst.style.display = "block";
  }
  if (verifLast()) {
    msgErrorLast.style.display = "none";
  }
  else {
    msgErrorLast.style.display = "block";
  }
  if (verifCg()) {
    messageErreurCg.style.display = "none";
  }
  else {
    messageErreurCg.style.display = "block";
  }
} */

// Vérification des CG (et affichage du message d'erreur si besoin) au click sur submit (pers.)
btnSubmit.addEventListener("click", () => {
  if (verifFirst()) {
    msgErrorFirst.style.display = "none";
  }
  else {
    msgErrorFirst.style.display = "block";
  }
  if (verifLast()) {
    msgErrorLast.style.display = "none";
  }
  else {
    msgErrorLast.style.display = "block";
  }
  if (verifEmail()) {
    msgErrorEmail.style.display = "none";
  }
  else {
    msgErrorEmail.style.display = "block";
  }
  if (verifBirthdate()) {
    msgErrorBirthdate.style.display = "none";
  }
  else {
    msgErrorBirthdate.style.display = "block";
  }
  console.log(verifBirthdate());
  if (verifQuantity()) {
    msgErrorQuantity.style.display = "none";
  }
  else {
    msgErrorQuantity.style.display = "block";
  }
  console.log(verifQuantity());
  if (verifCg()) {
    messageErreurCg.style.display = "none";
  }
  else {
    messageErreurCg.style.display = "block";
  }
  });

