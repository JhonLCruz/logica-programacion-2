let conversor = prompt("Seleccione F = Fahrenheit o K = Kelvin");
let dato = parseFloat(prompt("Inserte la temperatura en Celsius"));

while (conversor.toLowerCase() !== "f" && conversor.toLowerCase() !== "k") {
    alert("Por favor, ingrese una opción correcta (F o K).");
    conversor = prompt("Seleccione F = Fahrenheit o K = Kelvin");
}

while (isNaN(dato)) {
    alert("Por favor, ingrese un dato numérico.");
    dato = parseFloat(prompt("Inserte la temperatura en Celsius"));
}

let resultado;


switch (conversor.toLowerCase()) {
    case "f":
        resultado = (dato * 9/5) + 32;
        alert("La temperatura en Fahrenheit es: " + resultado);
        break;
    case "k":
        resultado = dato + 273.15;
        alert("La temperatura en Kelvin es: " + resultado);
        break;
    default:
        alert("Opción no válida");
}

