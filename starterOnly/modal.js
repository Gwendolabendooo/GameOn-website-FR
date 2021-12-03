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

// launch modal form
function toggleModal() {
    modalbg.classList.toggle("modal");
}

//Valid form
form.onsubmit = function (e) {
    e.preventDefault()

    if (e.target[0].value.length < 2) {
        e.target[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    }else{
        e.target[0].removeAttribute("data-error");
    }
};