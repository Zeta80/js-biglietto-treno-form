const userNameInput = document.getElementById("user-name");
const userDistanceInput = document.getElementById("user-distance");
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
let etaInput = document.getElementById("eta-option")
console.log(userNameInput, userDistanceInput, submitBtn, clearBtn, etaInput);
const pricePerKm = 0.21;
let discountPercentage = "";
let offertForUser = "";

// VARIABILI USER
let nameUser = document.getElementById("name-user");
let userOfferts = document.getElementById("user-offerts");
let userCarriage = document.getElementById("user-carriage");
let userCp = document.getElementById("user-codecp");
let userTicket = document.getElementById("user-ticket-cost");
console.log(nameUser, userOfferts, userCarriage, userCp, userTicket);

// SUBMIT FUCTION

submitBtn.addEventListener("click", function () {
    //al click prendo le informazioni
    // NOME E KILOMETRI
    const userName = userNameInput.value;
    console.log(userName);
    const km = userDistanceInput.value;
    console.log(km);
    // Età
    let eta = etaInput.value;
    console.log(eta);

    //inserisco il valore nello span
    // NOME E COGNOME
    nameUser.innerHTML = userName;
    // KM PREZZO
    const userPrice = km * pricePerKm;
    console.log(userPrice);
    userTicket.innerHTML = userPrice;
    // BIGLIETTO STANDAR O SCONTATO
    if (eta == "minorenne") {
        discountPercentage = 20;
        offertForUser = "sconto giovani"
    } else if (eta == "maggiorenne") {
        discountPercentage = 40;
        offertForUser = "Standard"
    }
    userOfferts.innerHTML = offertForUser;
    // CARROZZA
    userCarriage.innerHTML = Math.floor(Math.random() * 10) + 1;

    //codice CP
    userCp.innerHTML = parseInt(Math.random() * (999999 - 00001) + 00001);
    console.log(userCarriage, userCp);
})