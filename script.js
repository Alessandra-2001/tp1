//Menú Hamburguesa
const btnMenu = document.getElementById('btn-menu');
const menuLinks = document.getElementById('menu-links');

btnMenu.addEventListener('click', function(e) {
    menuLinks.classList.toggle('active');
    e.stopPropagation();
});

//Cerrar al clickear un link
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => menuLinks.classList.remove('active'));
});

//Cerrar al clickear fuera
document.addEventListener('click', (e) => {
    if (!menuLinks.contains(e.target) && e.target !== btnMenu) {
        menuLinks.classList.remove('active');
    }
});

var formulario = document.getElementById('form-registro');
var contenedorForm = document.getElementById('contenedor-formulario');
var contenedorFeedback = document.getElementById('mensaje-feedback');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nombreUsuario = document.getElementById('nombre').value;
    var emailUsuario = document.getElementById('email').value;

//Ocultar formulario
    contenedorForm.style.display = 'none';

//Mostrar feedback
    contenedorFeedback.style.setProperty('display', 'flex', 'important');

    contenedorFeedback.innerHTML = 
        '<h2>¡Gracias ' + nombreUsuario + ' por anotarte!</h2>' +
        '<p>Te enviamos el QR de la entrada al mail <strong>' + emailUsuario + '</strong></p>' +
        '<button id="btn-volver" class="boton-cargar-otro">Cargar otro</button>';

    document.getElementById('btn-volver').addEventListener('click', function() {
        formulario.reset(); 
        contenedorForm.style.display = 'block';
//Ocultar feedback
        contenedorFeedback.style.setProperty('display', 'none', 'important');
        contenedorFeedback.innerHTML = ''; 
    });
});