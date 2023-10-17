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
let flag ;
even.addEventListener ('click', function(){
flag=true;
});

odd.addEventListener ('click', function(){

flag=false;
});
enter.addEventListener ('click', function(){

    let number = document.getElementById('number').value;
 let random = getRndInteger(1,5);


});