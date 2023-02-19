let arrayDineroCaja = [];
let arrayCantidadDineroCaja = [];
let array = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]
let i = 0;


while (true) {
    let i = 0;
    let dineroCaja = Number(prompt("Que billete/moneda tienes en la caja?"));
    for (billete of array) {
        if (dineroCaja == billete) {
            arrayDineroCaja.push(dineroCaja);
            let cantidadDineroCaja = Number(prompt("Cuanta cantidad de billete/moneda de " + dineroCaja + " tienes?"))
            arrayCantidadDineroCaja.push(cantidadDineroCaja);
        } else if (billete == array.length - 1) {
            alert("No existe ese billete/moneda");
            break;
        }
    }
    if (!dineroCaja) break;
}
console.log(arrayDineroCaja);
console.log(arrayCantidadDineroCaja);

document.getElementById("boton").addEventListener("click", function () {
    var entrega = document.getElementById("entrega").value;
    var importe = document.getElementById("importe").value;
    resultado = entrega - importe;
    let tipoDinero;
    let cantidad;
    let resultadoCambios = "";
    let ultimoValorArrayDineroCaja = arrayDineroCaja.slice(-1);
    do {
        for (let i = 0; i < arrayDineroCaja.length; i++) {
            devolucion = resultado / arrayDineroCaja[i];
            if (Math.trunc(devolucion) > 0 && (Math.trunc(devolucion) <= arrayCantidadDineroCaja[i])) {
                resultado = resultado - (arrayDineroCaja[i] * Math.trunc(devolucion));
                if (arrayDineroCaja[i] > 2) {
                    tipoDinero = " billete"
                } else {
                    tipoDinero = " moneda"
                }
                if (arrayDineroCaja[i] > 1) {
                    cantidad = "euros"
                } else if (arrayDineroCaja[i] === 1) {
                    cantidad = "euro"
                } else {
                    cantidad = "centimos"
                }
                if (arrayDineroCaja[i] < 1 && arrayDineroCaja[i] >= 0.10) {
                    arrayDineroCaja[i] = arrayDineroCaja[i] * 10
                } else if (arrayDineroCaja[i] < 0.10) {
                    arrayDineroCaja[i] = arrayDineroCaja[i] * 100
                }
                resultadoCambios = resultadoCambios + "<br/>Se entregan " + Math.trunc(devolucion) + tipoDinero + " de " + arrayDineroCaja[i] + " " + cantidad + " como cambios";
                document.getElementById("resultado").innerHTML = resultadoCambios;
                arrayCantidadDineroCaja[i] = arrayCantidadDineroCaja[i] - Math.trunc(devolucion);
                console.log(resultado)
            }
        }
    }
    while (devolucion > 0 && resultado == ultimoValorArrayDineroCaja);
    if (resultado > 0 && resultado < ultimoValorArrayDineroCaja) {
        resultadoCambios = "No tienes cambios";
        devolucion = 0;
        document.getElementById("resultado").innerHTML = resultadoCambios;
    }
})