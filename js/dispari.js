// ### Pari e Dispari
// L’utente sceglie pari o dispari
// e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (ovviamente usando una funzione :faccia_nerd:).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (ovviamente  usando una funzione :faccia_nerd:)
// Dichiariamo chi ha vinto.



// L’utente sceglie pari o dispari

const enter = document.getElementById('send');
const even = document.getElementById('even');
const odd = document.getElementById('odd');
let flag;
let flagSum;
even.addEventListener('click', function () {
    flag = true;
});

odd.addEventListener('click', function () {

    flag = false;
});

enter.addEventListener('click', function () {
    let number = document.getElementById('number').value;
    let random = getRndInteger(1, 5);
    let calc = sum(number, random);
    evenNumber(calc);
    match(flag, flagSum);
    // console.log(number, random, calc);
    clientNr.innerHTML = 'il tuo numero ' + number;
    serverNr.innerHTML = 'il numero del computer ' + random;
    result.innerHTML = 'la somma ' + calc;
    
});


function sum(user, cpu) {
    let c = +user + +cpu;
    return c;
}


// Stabiliamo se la somma dei due numeri è pari o dispari 

function evenNumber(num1) {

    if (num1 % 2 === 0) {
        flagSum = true;
        console.log('è pari')
    } else {
        flagSum = false;
        console.log('è dispari');
    }

};

function match(x, y) {
    if (x === y) {
        text = 'hai vinto';
        console.log('hai vinto');
    } else {
        console.log('hai perso');
        text = 'hai perso';
    }
    gameRes.innerHTML = 'quindi ' + text;
}


