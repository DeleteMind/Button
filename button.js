let contar = 0;

function mais1(){ /*botão*/
    contar++; //incremente the count by 1
    document.getElementById("contador").innerText = `Clicks: ${contar}`;
}

