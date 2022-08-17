const boton = document.querySelector("#btn");
const promos = document.querySelector("#fetch");


const datosPromos = ()=>{
    fetch("../paginas/datos.json")
    .then(response => response.json())
    .then(result => {
        result.forEach(promocion => {
            promos.innerHTML += `
                <div>
                    <h3>${promocion.nombre}</h3>
                    <p>${promocion.descripcion}</p>
                    <p>$${promocion.precio}</p>
                </div>
            `
        })
    })
    .catch(error=> console.log(error))
    .finally(()=>{
    })
}


boton.onclick = () => {
    datosPromos();
}