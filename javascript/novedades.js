const boton = document.querySelector("#btn");
const novedades = document.querySelector("#fetch");


const datosNovedades = ()=>{
    fetch("../paginas/datos.json")
    .then(response => response.json())
    .then(result => {
        result.forEach(proximo => {
            novedades.innerHTML += `
                <div>
                    <img class=" image" src=${proximo.img}>
                    <p>${proximo.nombre}</p>
                </div>
            `
        })
    })
    .catch(error=> console.log(error))
    .finally(()=>{
    })
}


boton.onclick = () => {
    datosNovedades();
}