const form = document.querySelector("#form");
const cardholderName = document.querySelector("#cardholder-name");
const cardNumber = document.querySelector("#card-number");
const expMonth = document.querySelector("#exp-month");
const expYear = document.querySelector("#exp-year");
const Month = document.querySelector("#month");
const Year = document.querySelector("#year");
const cvc = document.querySelector("#cvc");
const backNumber = document.querySelector("#back-number");
const btn = document.querySelector("#btn");
const atmNumber = document.querySelector("#atm-number");
const userName = document.querySelector("#user-name");
const expDate = document.querySelector("#exp-date");
const warningcardNumber = document.querySelector("#warning-card-number");
const warningExpMonth = document.querySelector("#warning-exp-month");
const warningCvc = document.querySelector("#warning-cvc");
const submittedContainer = document.querySelector(".submitted-container");
let isDone = false;
let hasLetters = false;
let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function letterChecker(){

    for( let i = 0 ; i <= letters.length ; i++){
        if (cardNumber.value.charAt(i) === letters[i]){
            warningcardNumber.style.display = "block";
        }
        console.log(letters[i])
    };
}

form.addEventListener("submit", (e) => {

    if (expMonth.value === "" || expMonth.value === null || expYear.value === "" || expYear.value === null ) {
        e.preventDefault()
        warningExpMonth.style.display = "block";
        expMonth.style.border = "1px solid hsl(0, 100%, 66%)";
        expYear.style.border = "1px solid hsl(0, 100%, 66%)";
        console.log("it is an error")
        isDone = false;
    }

    if (expMonth.value !== "" || expYear.value !== "") {
        warningExpMonth.style.display = "none";
        expMonth.style.border = "1px solid hsl(270, 3%, 87%)";
        expYear.style.border = "1px solid hsl(270, 3%, 87%)";
    }

    if (cvc.value === ""){
        cvc.style.border = "1px solid hsl(0, 100%, 66%)";
        warningCvc.style.display = "block";
    }

    if (cvc.value !== ""){
        cvc.style.border = "1px solid hsl(270, 3%, 87%)";
        warningCvc.style.display = "none";
    }

    if (cardNumber.value === "" || cardNumber.value === null ) {
        e.preventDefault()
        warningcardNumber.style.display = "block";
        cardNumber.style.border = "1px solid hsl(0, 100%, 66%)";
        console.log("it is an error")
        isDone = false;
    }

    if (cardNumber.value.length === 16) {
        warningcardNumber.style.display = "none";
        cardNumber.style.border = "1px solid hsl(270, 3%, 87%)";
        isDone = true;
        e.preventDefault()
    }

    letterChecker();

    btn.addEventListener("click", () => {
        if (cardNumber.value.length === 16 && expMonth.value !== "" && expYear.value !== "" && cvc.value !== "" ) {
            form.style.display = "none";
            submittedContainer.style.display = "flex";
            e.preventDefault()
        }
    })

        }
    
);

function startCheck() {
    if (expYear.value.length>0 || expMonth.value.length>0 || cardholderName.value.length>0 || cvc.value.length>0 || cardNumber.value.length>0 ) {
        isDone = true;
        updateDetails()
    };
};

function updateDetails() {
    atmNumber.innerHTML = cardNumber.value;
    backNumber.innerHTML = cvc.value;
    userName.innerHTML = cardholderName.value.toUpperCase();
    Month.innerHTML = expMonth.value;
    Year.innerHTML = expYear.value;
};

let countDownTimerId = setInterval(startCheck, 10);
