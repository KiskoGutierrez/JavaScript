function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:

const boton = document.querySelector("button");

boton.addEventListener("click",function(){readTextFile("/JSON/noticias.json", function(text){
    let data = JSON.parse(text);
    let textoNoticias="";
    const cajaNoticias = document.querySelector("#noticias");

    data.noticias.forEach(item => {
        textoNoticias += `<p><strong> ${item.titular}</strong> <br>${item.descripcion} </p> `;
    });

    cajaNoticias.innerHTML = textoNoticias;
});})