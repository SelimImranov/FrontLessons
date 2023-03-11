const form = document.querySelector('#form');
const email = document.querySelector('input[name="email"]');
const emailr = document.querySelector('input[name="emailR"]');
const password = document.querySelector('input[name="password"]');
const passwordr = document.querySelector('input[name="passwordR"]');
const nameInput = document.querySelector('input[name="name"]');
const phone = document.querySelector('input[name="phone"]');
const ee = document.querySelector('input[name="ee"]');
const cityInput = document.querySelector('input[name="city"]');
const country = document.querySelector('#selet');
const siyahii = document.querySelector('#melet');
const genders = document.querySelectorAll('input[name="gender"]');
const agreeCadition = document.querySelector('#gridCheck');
const registerBtn = document.getElementById("register")




// inputdan error mesaji elave etmek
function Showerrormessage(input) {
    var label = input.previousElementSibling;
    label.style.color = "red"
    input.nextElementSibling.innerHTML = label.innerText + "Bu Sahe Bosdur"
}
// inputdan error mesaji silmek ucun
function hideErrorMessage(input) {
    var label = input.previousElementSibling;
    label.style.color = "black"
    input.nextElementSibling.innerHTML = "";
}
function isNullOrEmpty(input) {
    if (input.value == "" || input.value == null || input.value == undefined) {
        Showerrormessage(input)
    } else {
        hideErrorMessage(input)
    }

}
function checkequal(input1, input2) {
    if (input1.value == input2.value) {
        hideErrorMessage(input2)
    } else {
        var label = input2.previousElementSibling;
        input2.nextElementSibling.innerHTML = label.innerText + "Duz deyil"
    }
}
function checradio() {
    var check = false;
    genders.forEach(element => {
        if (element.checked) {
            check = true;
        }
    });
    if (check == true) {
        document.querySelector(".errorRadio").innerHTML = ""
    }
    else {
        document.querySelector(".errorRadio").innerHTML = "bosdur"
    }
}

agreeCadition.addEventListener("click",function(){
    if(agreeCadition.checked){
        registerBtn.disabled=false;
    }else{
        registerBtn.disabled=true;
    }

})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    isNullOrEmpty(email)
    isNullOrEmpty(password)
    isNullOrEmpty(nameInput)
    isNullOrEmpty(phone)
    isNullOrEmpty(ee)
    isNullOrEmpty(cityInput)
    checkequal(email, emailr)
    checkequal(password, passwordr)

    if (country.value == "choose") {
        Showerrormessage(country)
    } else {
        hideErrorMessage(country)
    }

    if(siyahii.value=="siyahi"){
        Showerrormessage(siyahii)
    }
    else{
        hideErrorMessage(siyahii)
    }
    checradio()

})
