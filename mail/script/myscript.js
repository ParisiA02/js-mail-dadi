// dichiarazione variabili
const mailList = ["budinger@aol.com","raines@icloud.com","sartak@verizon.net","esokullu@verizon.net","sblack@yahoo.com","gordonjcp@comcast.net","claesjac@yahoo.com","johnh@outlook.com"];
let mailUtente = prompt("Inserisci la tua mail: ");
let trovato = false;

// elaborazione
for (let i = 0; i < mailList.length; i++) {

    if(mailUtente === mailList[i]){
        trovato = true;
    }
    
}

// output
if(trovato){
    console.log(trovato);
    console.log("Invito trovato, puoi entrare");
}else{
    console.log(trovato);
    console.log("Invito non trovato, la partecipazione è esclusiva");
}