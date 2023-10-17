
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

 let listChar =[];
 let CharReverse =[];
// bottone che invia dati
const btn = document.querySelector('button');


btn.addEventListener('click', function (){
  const words = document.getElementById('words').value;
 listChar = words.split('');
 let y = listChar.toString();
 console.log(listChar);
 CharReverse = listChar.reverse();
 
  console.log(CharReverse);
  let x = CharReverse.toString();
  console.log(y);
  console.log(x);

  wordsReverse(x,y);

 
});



function wordsReverse(right, left) {
  if (right === left) {
    console.log('è un palindromo');
  } else {
    console.log('non è un palindromo');
  }
}



