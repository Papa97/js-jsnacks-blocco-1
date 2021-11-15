// es 1
// let i = 0;
// let somma = 0;
// let esUno = document.getElementById('es-1');
// let totale = document.getElementById('totale');

// while (i < 5){
//     let numero = parseInt(prompt('inserisci un numero'));
//     somma += numero;
//     console.log(somma); 
//     esUno.innerHTML += `<div>numero inserito ${numero}</div>
//     `;
//     totale.innerHTML = `il totale e: ${somma}`; 
//     i++;
// }



// con il for
// let somma = 0;
// let esUno = document.getElementById('es-1');
// let totale = document.getElementById('totale');
// for (let i = 0 ; i< 5; i++) {
//     let numero = parseInt(prompt('inserisci un numero'));
//     somma += numero;
//     console.log(somma);
//     esUno.innerHTML += `<div>numero inserito ${numero}</div>`;
//     totale.innerHTML = `il totale e: ${somma}`; 
// }

//es 2 

// let parolaUno = prompt('inserisci la prima parola');
// console.log(parolaUno);
// let parolaDue = prompt('inserisci la seconda parola');
// console.log(parolaDue);
// let parole = document.getElementById('parole');
// if (parolaUno.length == parolaDue.length) {
//     parole.innerHTML = 'la parola ' + parolaUno + ' e la parola ' + parolaDue + ' sono della stessa lunghezza';
// } else if (parolaUno.length > parolaDue.length) {
//     parole.innerHTML ='la parola ' + parolaUno + ' e piu lunga';
// } else {
//     parole.innerHTML ='la parola ' + parolaDue + ' e piu lunga';
// }


//es 3
let n = 2;
while (n < 500) {
    n *= 2;
    console.log(n);
}