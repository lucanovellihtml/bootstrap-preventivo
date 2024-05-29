"use strict";

//DICHIARAZIONE VARIABILE FORM
const form_price = document.getElementById("form_price");


/*
 -MODIFICATO IL COMPORTAMENTO DEL FORM AL CLICCARE DEL BOTTONE SUBMIT;
 -DICHIARAZIONE DELLE VARIABILI INPUT PER ACQUISIRE IL VALORE INSERITO DAL CLIENTE;
 -VIENE CONTROLLATO L'INPUT CALCOLATO IL PREZZO E INSERITO IL PREZZO NELLA PAGINA HTML;
 -VIENE CONTROLLATO SE SE IL CLIENTE HA INSERITO ANCHE IL CODICE SCONTO;
*/
form_price.addEventListener("submit", function (event) {

    event.preventDefault(); //MODIFICO IL COMPORTAMENTO DEL FORM

    //DEFINIZIONE VARIABILI INPUT
    const firstname = document.getElementById("firstName").value;
    const lastname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const work = document.getElementById("work").value;
    const textarea = document.getElementById("exampleFormControlTextarea1").value;
    const code = document.getElementById("code").value;
    const privacy = document.getElementById("privacy");


    const flag_check = checkForm(firstname, lastname, email, work, textarea, code, privacy); //FLAG CHE INDICA SE IL CONTROLLO E' ANDATO A BUON FINE
    const flag_check_discount = checkDiscount(code); //FLAG CHE INDICA SE IL CONTROLLO DELLO SCONTO E' ANDATO A BUON FINE

    if (flag_check && flag_check_discount) {
        console.log(firstname + "//" + lastname + "//" + email + "//" + work + "//" + textarea + "//" + code + "//" + privacy.checked);
        const price = operationPrice(work, flag_check_discount);
        //console.log("PREZZO CON SCONTO ---> " + price);
        addPriceHtml(price);
    }

    else if (flag_check) {
        console.log(firstname + "//" + lastname + "//" + email + "//" + work + "//" + textarea + "//" + privacy.checked);
        const price = operationPrice(work, flag_check_discount);
        //console.log("PREZZO SENZA SCONTO ---> " + price);
        addPriceHtml(price);
    }

    else
        console.log("NON COMPLETI");
})




/*
  -CONTROLLA, CON LE REGULA EXPRESSION, SE I CAMPI OBBLIGATORI SONO STATI COMPILATI CORRETTAMENTE;
  -DOPPIO CONTROLLO SE NEL CASO VENISSE MODIFICATO IL COMPORTAMENTO DELL'HTML;
*/
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



/*
  -VIENE CONTROLLATO SE L'INPUT CODE DAL FORM, CORRISPONDE CON I CODICI DI SCONTO
  -IN CASCO DI ESITO NEGATIVO, VIENE LEVATA LA CLASSE "DISPLAY NONE" AL MESSAGGIO DI ERRORE IN HTML;
*/
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



/*
  -VIENE, IN BASE AL LAVORO SELEZIONATO, CALCOLATO IL PREZZO;
  -SE IL METODO , CHE DETERMINA SE ESISTE LO SCONTO PER IL CLIENTE, HA L'INPUT FLAG SETTATO A TRUE,
   VIENE APPLICATO LO SCONTO AL PREZZO CON IL METODO APPOSITO;
*/
function operationPrice(work, flag) {

    let price;

    if (work === "Backed Development") {
        price = 20.50 * 10;
    }

    else if (work === "Frontend Development") {
        price = 15.30 * 10;
    }

    else {
        price = 33.60 * 10;
    }


    if (flag) {
        price -= operationDiscount(price, flag);
        return price.toFixed(2);
    }

    return price.toFixed(2);

}


/*
  -METODO CHE PRENDE IN INPUT IL PREZZO CALCOLATO SENZA SCONTO;
*/
function operationDiscount(price) {

    return ((price * 25) / 100);

}


//FUNZIONE AGGIUNTA DEL PREZZO IN HTML
function addPriceHtml(price) {

    let container_price = document.getElementById("container_price");
    let p = document.getElementById("price");
    p.innerHTML = price + " €";

}


/*
  -METODO CHE RIMUOVE AL MESSAGGIO DI ERRORE, PER L'INSERIMENTO ERRATO DEL CODICE SCONTO,
   LA CLASSE "DISPLAY-NONE";
*/
function errorMsgDiscount() {
    let error_msg = document.getElementById("error_msg");
    error_msg.classList.remove("d-none");
}