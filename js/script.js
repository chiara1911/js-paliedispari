
// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// questo è array
// let listWords = [
//     'o',
//     't',
//     't',
//     'o'
// ];


// console.log(listWords)
// elementi array
let words ='';
 let listWords =[];
// bottone che invia dati
const btn = document.querySelector('button');


btn.addEventListener('click', function (){
  const wordsEl = document.getElementById('words').value;
  

 let flag = false;
 for (let i = 0; i < listWords.length; i++) {

    if (listWords[i] !== listWords[i].reverse()) {
   flag = false;
 } else {
          flag = true;
      }
       
    }
 console.log(flag);
   

});






