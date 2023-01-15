/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let form = document.querySelector("form");

  function enviarDatos(e) {
    e.preventDefault();
    let Alertaroja = document.getElementById("Alertaroja");
    let card = document.getElementById("card");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("city");
    let postalCode = document.getElementById("postalCode");
    let textarea = document.getElementById("textarea");

    let validado = true;
    if (card.value === "") {
      card.style.backgroundColor = "pink";
      Alertaroja.style.display = "block";
      validado = false;
    }
    if (card.value === "") {
      card.style.backgroundColor = "pink";
      Alertaroja.style.display = "block";
      validado = false;
    }
    if (cvc.value === "") {
      cvc.style.backgroundColor = "pink";
      Alertaroja.style.display = "block";
      validado = false;
    }
    if (amount.value === "") {
      amount.style.backgroundColor = "pink";
      Alertaroja.style.display = "block";
      validado = false;
    }
    if (firstName.value === "") {
      firstName.style.backgroundColor = "pink";
      Alertaroja.style.display = "block";
      validado = false;
    }
    if (lastName.value === "") {
      lastName.style.backgroundColor = "pink";
      Alertaroja.style.display = "block";
      validado = false;
    }
    if (city.value === "") {
      city.style.backgroundColor = "pink";
      Alertaroja.style.display = "block";
      validado = false;
    }
    if (postalCode.value === "") {
      postalCode.style.backgroundColor = "pink";
      Alertaroja.style.display = "block";
      validado = false;
    }
    if (textarea.value === "") {
      textarea.style.backgroundColor = "pink";
      Alertaroja.style.display = "block";
      validado = false;
    }
    if (select.value === "Pick a state") {
      document.querySelector("select").style.background = "pink";
      validado = false;
    }
    if (validado === false);
  }

  function showAlert() {
    document.querySelector(".alert-danger").style.visibility = "visible";
  }
  form.addEventListener("submit", enviarDatos);

  //console.log("Hello Rigo from the console!");
};
