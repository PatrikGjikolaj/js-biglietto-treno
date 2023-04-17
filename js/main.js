let eta = Number( prompt("Inserisci la tua età") );
let chilometri = parseInt( prompt("Inserisci la distanza chilometrica") );

if( isNaN(chilometri) ) {
    alert("La distanza non è un numero. Impossibile procedere.");
} else {

    let prezzo = chilometri * 0.21;
    let messaggio = "";
    
    console.log("Prezzo di base", prezzo);
    
    if( isNaN(eta) ) {
        alert("L'età non corrisponde a un numero.");
    } else {

        if(eta < 18) {
            prezzo *= 0.8;
        
            messaggio = `Con lo sconto under 18`;
        
        } else if (eta > 65) {
            prezzo *= 0.55;
        
            messaggio = `Con lo sconto over 65`;
        
        } 
    }

    messaggio += ` il prezzo del biglietto è: ${ prezzo.toFixed(2) } €`;
    
    document.getElementById("importo").innerText = messaggio;
}