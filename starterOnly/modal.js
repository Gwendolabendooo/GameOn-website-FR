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
const close = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".btn-signup");
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById("modal");
const btnModal = document.querySelector(".btn-submit");
const form = document.getElementById("form");

// launch modal event
modalBtn.forEach((display) => display.addEventListener("click", toggleModal));

//Close modal
close.addEventListener("click", toggleModal);

//Close toaster
document.querySelector("body > main > div.toaster").onclick = function() {document.querySelector("body > main > div.toaster").style.display = "none"}

// launch modal form
function toggleModal() {
    modalbg.classList.toggle("modal");
}

//addERROR
function error(key, param, error) {
    console.log(key, param)
    if (param) {
        key.parentNode.querySelector('input').classList.add("error-input");
        key.parentNode.querySelector('.error').textContent = error;
    }else{
        key.parentNode.querySelector('input').classList.remove("error-input");
        key.parentNode.querySelector('.error').textContent = '';
    }
}

//verif e-mail
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return false
  }
    return true
}

//verif ville
function ValidateVille(ville) 
{
    var checked = false

    Object.values(ville).forEach(key => {
        if (key.name === "location") {
            console.log(key.checked)
            if (key.checked === true) {
                    console.log(key.parentNode.querySelector('.error'))
                    key.parentNode.querySelector('input').classList.remove("error-input");
                    key.parentNode.querySelector('.error').textContent = '';
                    checked = true
            }
        }
    })

    if(!checked){
        document.querySelector('input[type="radio"]').parentNode.querySelector(".error").textContent = "veuillez selectionner une ville";
    }
}

//Valid form
form.onsubmit = function (e) {
    e.preventDefault()

    ValidateVille(document.querySelectorAll('input[type="radio"]'))

    Object.values(e.target).forEach(key => {
        console.log(key)
        switch (key.id) {
            case 'first':
                error(key, key.value.length < 2, "Veuillez entrer 2 caractères ou plus pour le champ du prenom.")
                break;
            case 'last':
                error(key, key.value.length < 2, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
                break;
            case 'birthdate':
                error(key, key.value === '' || new Date(key.value).valueOf() > Date.now(), "Veuillez entrer une date infèrieure à la date du jour")
                break;
            case 'email':
                error(key, ValidateEmail(key.value), "L'adresse renseignée n'est pas valide")
                break;
            case 'quantity':
                error(key, typeof key.value == 'number', "Veuillez accepter les conditions d'utilisation")
                break;
            case 'checkbox1':
                error(key, key.checked === false, "Veuillez accepter les conditions d'utilisation")
                break;
        }
    });

    //Formulaire envoyé
    if (document.querySelectorAll('.error-input').length === 0) {
        //Affiche message de confirmation
        document.querySelector("body > main > div.toaster").style.display = "block"
        //Vide les champs du formulaire
        document.querySelectorAll('input:not(:last-child)').forEach(key => {
            key.value = ""
            key.checked = false
        })
        toggleModal()
    }
};