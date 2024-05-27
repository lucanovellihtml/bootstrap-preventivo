"use strict";

//DICHIARAZIONE VARIABILE FORM
const form_price = document.getElementById("form_price");

//DICHIARAZIONE ARRAY OGGETTI LAVORO
const array_works = [
    { nome: "Backed Development", prezzo: 20.50 },
    { nome: "Frontend Development", prezzo: 15.30 },
    { nome: "Project Analysis", prezzo: 33.60 }
];


//CARICAMENTO DEGLI INPUTS DI LAVORO NELLA PAGINA HTML
document.addEventListener('DOMContentLoaded', function () {
    addWorksHtml(array_works);
})



//MAIN
form_price.addEventListener("submit", function (event) {

    event.preventDefault(); //MODIFICO IL COMPORTAMENTO DEL FORM

    //DEFINIZIONE VARIABILI INPUT
    const firstname = document.getElementById("firstName").value;
    const lastname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const work = document.getElementById("container_work").value;
    const textarea = document.getElementById("exampleFormControlTextarea1").value;
    const code = document.getElementById("code").value;
    const privacy = document.getElementById("privacy");


    const flag_check = checkForm(firstname, lastname, email, work, textarea, code, privacy); //FLAG CHE INDICA SE IL CONTROLLO E' ANDATO A BUON FINE
    const flag_check_discount = checkDiscount(code); //FLAG CHE INDICA SE IL CONTROLLO DELLO SCONTO E' ANDATO A BUON FINE

    if (flag_check && flag_check_discount) {
        //console.log(firstname + "//" + lastname + "//" + email + "//" + work + "//" + textarea + "//" + code + "//" + privacy.checked);
        const price = operationPrice(work, array_works, flag_check_discount);
        console.log("PREZZO CON SCONTO ---> " + price);
        addPriceHtml(price);
    }

    else if (flag_check) {
        //console.log(firstname + "//" + lastname + "//" + email + "//" + work + "//" + textarea + "//" + privacy.checked);
        const price = operationPrice(work, array_works, flag_check_discount);
        console.log("PREZZO SENZA SCONTO ---> " + price);
        addPriceHtml(price);
    }

    else
        console.log("NON COMPLETI");
})



//FUNZIONE CHECK PARAMETRI FORM
function checkForm(firstname, lastname, email, work, textarea, code, privacy) {

    //DEFINIZIONE REGULAR EXPRESSION
    const regular_expression = /^[a-zA-Z]+$/;
    const regular_expression_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (regular_expression.test(firstname) && regular_expression.test(lastname) && regular_expression_email.test(email) && privacy.checked) {
        if (work === "Backed Development" || work === "Frontend Development" || work === "Project Analysis")
            return true;
    }

    return false;

}



//FUNZIONE AGGIUNTA INPUTS LAVORO IN HTML
function addWorksHtml(array_works) {

    let container_work = document.getElementById("container_work");

    for (let i = 0; i < array_works.length; i++) {

        const work = array_works[i];
        let input_work = document.createElement("option");
        input_work.innerHTML = work.nome;
        container_work.append(input_work);

    }


}



//FUNZIONE CHECK CODICE SCONTO
function checkDiscount(code) {

    //DEFINIZIONE REGULAR EXPRESSION
    const array_discount = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

    for (let i = 0; i < array_discount.length; i++) {
        if (code === array_discount[i]) {
            error_msg.classList.add("d-none");
            return true;
        }
        else if (code.length > 0 && code !== array_discount[i]) {
            errorMsgDiscount();
            return false;
        }
    }

    return false;

}



//FUNZIONE CALCOLO DEL PREVENTIVO
function operationPrice(work, array_works, flag) {

    let price;

    for (let i = 0; i < array_works.length; i++) {

        if (work === array_works[i].nome) 
            price = array_works[i].prezzo * 10;
    
    }


    if (flag) {
        price = operationDiscount(price, flag);
        return price.toFixed(2);
    }

    return price.toFixed(2);

}



//FUNZIONE CALCOLO DEL PREVENTIVO CON SCONTO
function operationDiscount(price) {

    return ((price * 25) / 100);

}



//FUNZIONE AGGIUNTA DEL PREZZO IN HTML
function addPriceHtml(price) {

    let container_price = document.getElementById("container_price");
    let p = document.getElementById("price");
    p.innerHTML = price + " €";

}



//FUNZIONE AGGIUNTA ERROR CHECK CODICE SCONTO
function errorMsgDiscount() {
    let error_msg = document.getElementById("error_msg");
    error_msg.classList.remove("d-none");
}