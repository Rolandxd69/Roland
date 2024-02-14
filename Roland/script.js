// Define un conjunto de frases
var phrases = [
    "Mi amor por ti no tiene límites",
    "Incluso cuando estás enojada, sigues siendo la persona más adorable que conozco ",
    "Eres la mejor parte de mi día",
    "No quiero nadie mas a mi lado, si no sos vos",
    "Eres mi corazón",
    "Eres mi mejor decisión",
    "Lo que siento por vos es mas grande que el universo",
    "Lo que quiero con vos es eterno",
    "Sos lo mejor que me pudo haber pasado",
    "Te quiero Mucho"
];

// Obtiene el elemento de texto
var textElement = document.getElementById("text-content");

// Define una variable para rastrear el índice actual de la frase
var currentIndex = 0;

// Agrega un evento de clic al botón
document.getElementById("change-text-button").addEventListener("click", function() {
    // Cambia el texto al siguiente en la lista de frases
    currentIndex = (currentIndex + 1) % phrases.length;
    changeTextWithAnimation(phrases[currentIndex]);
});

// Función para cambiar el texto con animación
function changeTextWithAnimation(newText) {
    textElement.textContent = newText; // Cambia el texto
}
