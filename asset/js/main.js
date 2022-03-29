//inseriamo la mail dal HTML...ATTENZIONE da mette nella condizione button
const url_game = `www.facebook.com`

const emails = [`marco@mail.com`, `giuseppe@mail.com`, `simone@mail.com`]
    //attiviamo la funzione
function myFunction() {
    //inseriamo la mail dal HTML
    const insertEmail = document.getElementById(`insertEmail`).value;
    //prendiamo in esame tutte le mail
    for (let i = 0; i < emails.length; i++) {
        let email = emails[i]
        if (insertEmail == email) {
            document.getElementById("enter").innerHTML =
                "entra nel gioco";
        }
    }
}

function Lancio() {
    let lancioMio = document.getElementById(`lancioMio`).value
    console.log(lancioMio);
    let lancioComp = Math.floor(Math.random() * 6) + 1
    if (lancioMio == lancioComp) {
        alert `pareggio`
    } else if (lancioMio > lancioComp) {
        alert `hai vinto`
    } else {
        alert `hai perso`
    }
    console.log(lancioComp);
}