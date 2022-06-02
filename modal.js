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
// Ajout bouton close (pers.)
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

//On vérifie la validité du firstname
function verifFirst () {
  let firstValue = document.getElementById("first").value;
  let result;
  if (firstValue !== null && firstValue.lenght > 2) {
    result = true;
  }
  else {
    result = false;
  }
  return result;
};
// On stock le résultat de la fonction verifFirst dans une variable
var resultFirst = verifFirst();

//On vérifie si les CG sont cochées
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
// On stock le résultat de la fonction verifCg dans une variable
var resultCg = verifCg();

// Vérification des CG (et affichage du message d'erreur si besoin) au click sur submit
btnSubmit.addEventListener("click", () => {
  verifCg ();
  var resultCg = verifCg();
  if (resultCg) {
    messageErreurCg.style.display = "none";
  }
  else {
    messageErreurCg.style.display = "block";
  }
});




