function obtenerRandom(X) {

    return Math.trunc(Math.random() * X);
}

//Damos un valor aleatorio al primer usuario
const nombresAleatorios = ["Ramiro", "Facundo", "Maria", "Ulises"];
let nombre = document.querySelector('.Persona');
nombre.innerHTML = nombresAleatorios[obtenerRandom(4)];

//Damos un valor aleatorio a los me gusta
let numero = document.querySelector('.Numero');
numero.innerHTML = obtenerRandom(500) + " personas más";

//Creamos el ... más para textos largos
let texto = document.querySelector('.descripcion-texto');
let cantidadTexto = texto.innerHTML.length;

let textoMitad1 = texto.innerHTML.slice(0, cantidadTexto / 2 + 110);
let textoMitad2 = texto.innerHTML.slice(cantidadTexto / 2, cantidadTexto);
//Maximo de 110 visibile
if (cantidadTexto > 110) {
    texto.innerHTML = textoMitad1 + '<p class="ver-mas">más...</p>';
}

//Verifico que exista el "mas..."
let verMas = document.querySelector('.ver-mas');
//Cuando el usuario de click en 'ver-mas'
if (verMas) {
    verMas.addEventListener('click', () => texto.innerHTML = textoMitad1 + textoMitad2);
}