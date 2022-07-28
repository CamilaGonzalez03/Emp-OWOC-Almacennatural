//FORMULARIO pagina contacto.

const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
    event.preventDefault();
    console.log(
        event.target.nombre.value,
        event.target.apellido.value,
        event.target.email.value,
        event.target.mensaje.value);
    alert("El formulario ha sido enviado. Muchas gracias.");
    form.reset ();
}

form.addEventListener("submit", enviarFormulario);

