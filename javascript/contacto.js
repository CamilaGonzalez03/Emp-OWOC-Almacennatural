//FORMULARIO pagina contacto.

window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario');
    const formNombre = document.querySelector("#nombre");
    const formApellido = document.querySelector("#apellido");
    const formEmail = document.querySelector("#e-mail");
    const formMensaje = document.querySelector("#mensaje");


//Validacion de los campos ingresados por el usuario.
    const validaCampos = ()=> {
        nombre = formNombre.value.trim();
        apellido = formApellido.value.trim();
        email = formEmail.value.trim();
        mensaje = formMensaje.value.trim();

        if(nombre === "" || apellido === "" || email === "" || mensaje === "") {
            Swal.fire({
                icon: 'error',
                title: 'Completar campo',
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Su formulario ha sido enviado.',
                text: 'Gracias!',
            })
        form.reset ();   
        }

        localStorage.setItem('Nombre', nombre)
        localStorage.setItem('Apellido', apellido)
        localStorage.setItem('Email', email)
        localStorage.setItem('Mensaje', mensaje)

    }

//Almacenamiendo de datos a traves de localStorage.
    form.addEventListener("submit", (e)=> {
        e.preventDefault();
        validaCampos();

    })
})

