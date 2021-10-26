let numeroPc, numeroUtente;

numeroPc = Math.floor(Math.random() * 6 + 1);
numeroUtente = Math.floor(Math.random() * 6 + 1);

console.log(numeroPc);
console.log(numeroUtente);

if( numeroPc > numeroUtente){

    console.log("hai vinto!")

}else if(numeroPc < numeroUtente){

    console.log("hai perso!")

}else{

    console.log("pareggio!");

}



