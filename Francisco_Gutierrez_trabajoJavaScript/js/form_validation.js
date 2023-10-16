 //Función que se ejecuta al cambiar algún elemento seleccionado
 
function calcularPresupuesto(){
    //Se obtiene el valor del producto seleccionado
    var producto = document.getElementById("producto").value;
    //Se obtiene el valor del plazo seleccionado
    var meses = document.getElementById("meses").value;
    //Se inicializa el total a la suma del producto y los meses
    var total = parseInt(producto) * parseInt(meses);
    //Se obtiene los extras seleccionados
    var extra1 = document.getElementById("extra1").checked;
    var extra2 = document.getElementById("extra2").checked;
    var extra3 = document.getElementById("extra3").checked;
    var extra4 = document.getElementById("extra4").checked;
    //Si el extra está seleccionado, se suma su valor al total
    if(extra1){
        total += parseInt(document.getElementById("extra1").value);
    }
    if(extra2){
        total += parseInt(document.getElementById("extra2").value);
    }
    if(extra3){
        total += parseInt(document.getElementById("extra3").value);
    }
    if(extra4){
        total += parseInt(document.getElementById("extra4").value);
    }
    //Se muestra el total en la página
    document.getElementById("total").innerHTML = total;
}

    //Se asigna la función al evento onchange
    document.getElementById("producto").onchange = calcularPresupuesto;
    document.getElementById("meses").onchange = calcularPresupuesto;
    document.getElementById("extra1").onchange = calcularPresupuesto;
    document.getElementById("extra2").onchange = calcularPresupuesto;
    document.getElementById("extra3").onchange = calcularPresupuesto;
    document.getElementById("extra4").onchange = calcularPresupuesto;