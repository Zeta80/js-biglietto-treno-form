const userNameInput = document.getElementById("user-name");
const userDistanceInput = document.getElementById("user-distance");
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
console.log(userNameInput, userDistanceInput, submitBtn, clearBtn);

// VARIABILI USER
const nameUser = document.getElementById("name-user");
const userOfferts = document.getElementById("user-offerts");
const userCarriage = document.getElementById("user-carriage");
const userCp = document.getElementById("user-codecp");
const userTicket = document.getElementById("user-ticket-cost");
console.log(nameUser, userOfferts, userCarriage, userCp, userTicket);

// SUBMIT FUCTION

submitBtn.addEventListener("click", function () {
    //al click prendo le informazioni
    const userName = userNameInput.value;
    console.log(userName);

    //inserisco il valore nello span

    nameUser.innerHTML = 

})