
// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// questo è array
let listWords = [
    'o',
    't',
    't',
    'o'
];
console.log(listWords);
// console.log(listWords)
// elementi array
// let words ='';
// const wordsEl = document.getElementById('words');
// bottone che invia dati
const btn = document.querySelector('button');

let flag = false;
btn.addEventListener('click', function () {
    for (let i = 0; i < listWords.length; i++) {

      if (listWords !== listWords.reverse()) {
    flag = false;
    } else {
          flag = true;
      }
       
    }
    console.log(flag);
   

});






