const questions = [
    "¿Cómo puedo rastrear mi pedido?",
    "¿Cuál es su política de devoluciones?",
    "¿Ofrecen envíos internacionales?",
    "¿Cómo puedo cambiar mi contraseña?",
    "¿Dónde puedo encontrar información sobre descuentos y promociones?",
    "¿Qué métodos de pago aceptan?",
    "¿Cómo puedo contactar con el soporte técnico?",
    "¿Puedo modificar mi pedido después de haberlo realizado?",
    "¿Cómo puedo cancelar mi suscripción?",
    "¿Qué hago si recibí un producto defectuoso?",
    "¿Puedo recoger mi pedido en una tienda física?",
    "¿Cuál es el tiempo estimado de entrega?",
    "¿Cómo puedo actualizar mi dirección de envío?",
    "¿Ofrecen tarjetas de regalo?",
    "¿Cómo puedo dejar una reseña sobre un producto?"
];

const responses = [
    "Puede rastrear su pedido ingresando el número de seguimiento en nuestra página de rastreo.",
    "Nuestra política de devoluciones permite devoluciones dentro de los 30 días posteriores a la compra.",
    "Sí, ofrecemos envíos internacionales a varios países. Consulte nuestra página de envíos para más detalles.",
    "Puede cambiar su contraseña en la sección de configuración de su cuenta.",
    "Puede encontrar información sobre descuentos y promociones en nuestra página de ofertas especiales.",
    "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, PayPal y transferencias bancarias.",
    "Puede contactar con el soporte técnico a través de nuestro formulario de contacto o llamando a nuestro número de atención al cliente.",
    "Para modificar su pedido, por favor contacte a nuestro soporte al cliente lo antes posible.",
    "Puede cancelar su suscripción desde la configuración de su cuenta en nuestra página web.",
    "Si recibió un producto defectuoso, por favor contacte a nuestro servicio al cliente para iniciar el proceso de devolución o reemplazo.",
    "Sí, puede seleccionar la opción de recogida en tienda al momento de realizar su pedido.",
    "El tiempo estimado de entrega varía según la ubicación, pero generalmente es de 3 a 7 días hábiles.",
    "Puede actualizar su dirección de envío en la sección de configuración de su cuenta o contactando a nuestro soporte al cliente.",
    "Sí, ofrecemos tarjetas de regalo que puede adquirir en nuestra página de productos.",
    "Puede dejar una reseña sobre un producto en la página del producto, en la sección de reseñas."
];

let currentQuestionIndex = -1;

document.getElementById('start-button').addEventListener('click', startSimulation);
document.getElementById('submit-button').addEventListener('click', checkResponse);

const draggables = document.querySelectorAll('.draggable');
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
});

function startSimulation() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    document.getElementById('question').textContent = questions[currentQuestionIndex];
    document.getElementById('feedback').textContent = '';
    document.getElementById('drop-zone').textContent = 'Arrastra la respuesta aquí';
}

function checkResponse() {
    const userResponse = document.getElementById('drop-zone').textContent;
    if (userResponse.trim() === responses[currentQuestionIndex]) {
        document.getElementById('feedback').textContent = '¡Correcto! Buen trabajo.';
    } else {
        document.getElementById('feedback').textContent = 'Respuesta incorrecta. Inténtalo de nuevo.';
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.textContent = data;
}
