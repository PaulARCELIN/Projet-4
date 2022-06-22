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
const FORMBODY = document.querySelectorAll(".modal-body");
// Ajout de la varibale bouton close (pers.)
const CLOSEBTN = document.querySelectorAll(".close");
const FORMCONTENT = document.getElementById("content");

// launch modal event
MODALBTN.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  MODALBG.style.display = "block";
  document.getElementById("form").reset();
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
const DATE_REGEX = new RegExp (/(\d\d)/);
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
  if (quantityValue.length !== 0) {
    return true;
  }
  else {
    return false;
  }
};


let radios = document.getElementById('formRadio');
let radiosList = radios.querySelectorAll('input');
// On désactive le message d'erreur location
let msgErrorLocation = document.getElementById('msgErrorLocation');
msgErrorLocation.style.display = "none";
// On passe les valeurs des inputs radios sous form d'array 
function verifLocation() {
  let radiosInput = Array.from(radiosList).map(radio => radio.checked);
  let vrai = (e) => e === true; 
  if(radiosInput.some(vrai)){
    return true;
  } else {
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

// Verification finale, qui check si toutes les autres verifs sont "true"
function verifFinal() {
  let allVerif = [verifFirst(), verifLast(), verifEmail(), verifBirthdate(), verifQuantity(), verifCg()];
  if (allVerif.includes(false)) {
    return false;
  }
  else {
    return true;
  }
};

// On désactive le message de validation 
var validationMess = document.getElementById('validation-mess');
validationMess.style.display = "none"; 
// Fonction pour fermer le message de validation 
var closeValidationMess = document.querySelectorAll('#validation-mess_close');
var closeValidationBtn = document.querySelectorAll('#bouton_fermer');
// Ajout de l'évenement sur le close du message de validation
closeValidationBtn.forEach((btn) => btn.addEventListener("click", closeValidation));
closeValidationMess.forEach((btn) => btn.addEventListener("click", closeValidation));
// Fonction qui ferme le message de validation et recharge la page
function closeValidation() {
  MODALBG.style.display = "none";
  location.reload();
}

// Fonction qui ferme le formulaire et affichage le message de validation
function closeForm () {
  FORMCONTENT.style.display = "none";
  validationMess.style.display = "block";
}

// Fonction qui vérifie chaque étape du formulaire
function submitForm (event) {
  event.preventDefault();
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
  if (verifQuantity()) {
    msgErrorQuantity.style.display = "none";
  }
  else {
    msgErrorQuantity.style.display = "block";
  }
  if (verifLocation()) {
    msgErrorLocation.style.display = "none";
  }
  else {
    msgErrorLocation.style.display = "block";
  }
  if (verifCg()) {
    messageErreurCg.style.display = "none";
  }
  else {
    messageErreurCg.style.display = "block";
  }
  if (verifFinal()) {
    closeForm();
    document.getElementById("form").reset();
  }
  else {
    console.log('faux')
  }
}

// Vérification des CG (et affichage du message d'erreur si besoin) au click sur submit (pers.)
btnSubmit.addEventListener("click", submitForm);

  

