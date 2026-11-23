
//  Obtener los elementos del HTML usando su ID

const valor = document.getElementById("valor");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const boton = document.getElementById("convertir");
const resultado = document.getElementById("resultado");


//  Función para verificar si los campos están completos

function verificarCampos() {

    // Verifica que el valor no esté vacío,
    // que se haya seleccionado el origen
    // y que se haya seleccionado el destino.

    boton.disabled = !(
        valor.value !== "" &&
        origen.value !== "" &&
        destino.value !== ""
    );

    // Si falta algún campo, el botón queda deshabilitado.
    // Si todos están completos, el botón se habilita.
}


//  Detectar cuando el usuario escribe una temperatura

valor.addEventListener("input", verificarCampos);


//  Detectar cuando el usuario selecciona una unidad de origen

origen.addEventListener("change", verificarCampos);


//  Detectar cuando el usuario selecciona una unidad de destino

destino.addEventListener("change", verificarCampos);


// Detectar cuando el usuario presiona el botón Convertir

boton.addEventListener("click", function() {

    // Obtener el número ingresado por el usuario
    let temperatura = parseFloat(valor.value);

    // Crear una variable para guardar la temperatura en Celsius
    let celsius;


    //  Convertir la temperatura de origen a Celsius

    if (origen.value === "C") {

        // Si ya está en Celsius, no necesita conversión
        celsius = temperatura;

    } else if (origen.value === "F") {

        // Fórmula para convertir Fahrenheit a Celsius
        celsius = (temperatura - 32) * 5 / 9;

    } else {

        // Fórmula para convertir Kelvin a Celsius
        celsius = temperatura - 273.15;
    }


    //  Crear una variable para guardar el resultado final

    let conversion;


    //  Convertir de Celsius a la unidad de destino

    if (destino.value === "C") {

        // Si el destino es Celsius, dejamos el valor igual
        conversion = celsius;

    } else if (destino.value === "F") {

        // Fórmula para convertir Celsius a Fahrenheit
        conversion = (celsius * 9 / 5) + 32;

    } else {

        // Fórmula para convertir Celsius a Kelvin
        conversion = celsius + 273.15;
    }


    //  Mostrar el resultado en el HTML

    resultado.textContent =
        "Resultado: " + conversion.toFixed(2) + " " + destino.value;

});
