// Paso 1: Seleccionar el elemento HTML por su ID
const parrafoIntroduccion = document.getElementById("parrafo-introduccion");

// --- VARIABLES Y TIPOS DE DATOS ---

// Variable tipo string (texto)
let nombrePueblo = "Colonia Tovar";
let fundador = "Agustín Codazzi"; // Dato curioso real :)

// Variable tipo number (número)
const añoFundacion = 1843; // Usamos const porque el año de fundación no cambia
let turistasVisitandoHoy = 1200; // Esto podría cambiar

// Variable tipo boolean (verdadero/falso)
let estaAbiertoElMuseo = true;
let hayFeriaDeLaFresa = false; // Por ahora no, pero podría cambiar

// Mostramos los valores en la consola para verlos
console.log("--- Información de la Colonia Tovar (Variables) ---");
console.log("Pueblo: " + nombrePueblo); // Concatenación de string
console.log("Fundador: " + fundador);
console.log("Año de fundación: " + añoFundacion);
console.log("Turistas visitando hoy: " + turistasVisitandoHoy);
console.log("¿Está abierto el museo? " + estaAbiertoElMuseo);
console.log("¿Hay feria de la fresa? " + hayFeriaDeLaFresa);

// Podemos cambiar el valor de una variable 'let'
turistasVisitandoHoy = turistasVisitandoHoy + 50; // ¡Llegaron 50 turistas más!
console.log("Turistas actualizados: " + turistasVisitandoHoy);

// --- EVENTOS Y MANIPULACIÓN DEL DOM ---
// Aquí vamos a manipular el DOM y manejar eventos
// Verificar si el elemento fue encontrado
if (parrafoIntroduccion) {
    // Establecer el contenido inicial (esto se ejecutará una vez al cargar la página)
    parrafoIntroduccion.textContent = "¡Willkommen a la Colonia Tovar!";
    parrafoIntroduccion.style.color = "lightgreen";
    parrafoIntroduccion.style.fontWeight = "bold";

    console.log("Párrafo inicial configurado.");

    // --- EVENTOS ---
// Función simple que no toma parámetros y no devuelve nada
function mostrarBienvenida() {
    console.log("---------------------------------------");
    console.log("¡Willkommen a la Colonia Tovar!");
    console.log("¡Disfruta de la magia de este rincón alemán!");
    console.log("---------------------------------------");
}

// Función que toma un parámetro y lo usa para devolver un mensaje
function obtenerMensajePersonalizado(nombreVisitante) {
    return "¡Hola, " + nombreVisitante + "! Qué alegría verte por aquí.";
}

// Función que calcula el costo de las fresas (ejemplo con retorno)
function calcularCostoFresas(cantidadKilos, precioPorKilo) {
    const costoTotal = cantidadKilos * precioPorKilo;
    return costoTotal; // Devolvemos el resultado del cálculo
}

// --- LLAMANDO A LAS FUNCIONES ---

console.log("\n--- Demostración de Funciones ---");
// --- ESTRUCTURAS DE CONTROL (CONDICIONALES) ---

// Recordatorio de la variable del museo (ya debería estar declarada arriba)
// let estaAbiertoElMuseo = true; // O false, para probar ambos casos

if (estaAbiertoElMuseo === false) { // O simplemente `if (estaAbiertoElMuseo)` ya que es un booleano
    console.log("¡Excelente! El Museo de la Colonia Tovar está abierto hoy. ¡No olvides visitarlo!");
} else {
    console.log("Lo sentimos, el Museo de la Colonia Tovar está cerrado hoy. ¡Vuelve pronto!");
}

// Otro ejemplo: Mensaje basado en la cantidad de turistas
// let turistasVisitandoHoy = 1200; // Ya deberías tener esta variable
if (turistasVisitandoHoy > 1000) {
    console.log("¡La Colonia Tovar está concurrida hoy! Disfruta la energía.");
} else if (turistasVisitandoHoy > 500) {
    console.log("La Colonia Tovar tiene una afluencia moderada hoy.");
} else {
    console.log("La Colonia Tovar está tranquila hoy. ¡Ideal para un paseo relajado!");
}

// --- FIN DE ESTRUCTURAS DE CONTROL ---
// Llama a la primera función
mostrarBienvenida();

// Llama a la segunda función y guarda su resultado en una variable
let mensajeParaJuan = obtenerMensajePersonalizado("Juan");
console.log(mensajeParaJuan);

let mensajeParaMaria = obtenerMensajePersonalizado("María");
console.log(mensajeParaMaria);

// Llama a la tercera función y usa el resultado
const kilosFresasComprados = 3;
const precioActualFresas = 5; // Simulemos 5 dólares/euros por kilo
let miFacturaFresas = calcularCostoFresas(kilosFresasComprados, precioActualFresas);
console.log("Has comprado " + kilosFresasComprados + " kilos de fresas por $" + miFacturaFresas + ".");

// --- ESTRUCTURAS DE CONTROL (BUCLES) ---

console.log("\n--- Demostración de Bucles ---");

// Ejemplo con bucle 'for': Contar el paso del tiempo en la Colonia Tovar
for (let año = 1; año <= 3; año++) { // Repetimos 3 veces
    console.log("Han pasado " + año + " años desde un evento especial en la Colonia Tovar.");
}

// Ejemplo con 'forEach' y un Array (tu lista de hobbies)
// Primero, definimos tu array de hobbies (si no lo tienes ya en una variable)
const hobbiesDeJBrands = ["Ver TV", "Jugar WoW", "Aprender"]; 

console.log("\nMis hobbies:");
hobbiesDeJBrands.forEach(function(hobby) {
    console.log("- " + hobby);
});

// Otro ejemplo de forEach con una lista de sitios de interés
const sitiosInteresColonia = [
    "Iglesia San Martín de Tours",
    "Museo de la Colonia Tovar",
    "Fincas de fresas",
    "Cervecería Tovar",
    "Cascada del Pato"
];

console.log("\nLugares para visitar en la Colonia Tovar:");
sitiosInteresColonia.forEach(function(lugar) {
    console.log("✨ Visita: " + lugar);
});

// --- FIN DE ESTRUCTURAS DE CONTROL (BUCLES) ---
// --- FIN DE DEMOSTRACIÓN DE FUNCIONES ---


    // Paso 2: Añadir un Event Listener para el evento 'click'
    // Cuando el usuario haga clic en el párrafo, se ejecutará la función anónima.
    parrafoIntroduccion.addEventListener('click', function() {
        // Este código se ejecutará CADA VEZ que se haga clic en el párrafo

        // Cambiamos el texto del párrafo
        if (parrafoIntroduccion.textContent === "¡Willkommen a la Colonia Tovar!") {
            parrafoIntroduccion.textContent = "¡Esperamos que disfrutes tu visita!";
            parrafoIntroduccion.style.color = "gold"; // Cambia el color al segundo estado
        } else {
            parrafoIntroduccion.textContent = "¡Willkommen a la Colonia Tovar!";
            parrafoIntroduccion.style.color = "lightgreen"; // Vuelve al color original
        }

        // Opcional: Imprime en la consola cada vez que se hace clic
        console.log("¡Clic en el párrafo detectado!");
    });

} else {
    console.log("Error: No se encontró el párrafo con el ID 'parrafo-introduccion'.");
}