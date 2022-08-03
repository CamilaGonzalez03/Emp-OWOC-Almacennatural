const Clickboton = document.querySelectorAll('.boton')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickboton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.container__card')
    const itemTitulo = item.querySelector('.card-titulo');
    const itemPrecio = item.querySelector('.precio');
    const itemImg = item.querySelector('.card-imgen');

    const newItem = {
        title: itemTitulo,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)
}

function addItemCarrito(newItem) {

    carrito.push(newItem)

    renderCarrito()
} 

function renderCarrito(){

    tbody.innerHTML = ''
    carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th class="tabla" scope="row">1</th>
    <td class="tabla__productos">
        <img src="${item.img}" alt="">
        <p class="tabla__titulo">${item.titulo}</p>
    </td>
    <td class="tabla__precio">
        <p>${item.precio}</p>
    </td>
    <td class="tabla__cantidad">
        <input type="number" min="1" value="${item.cantidad}">
        <button class="delete btn btn-danger">X</button>
    </td>
    `
    tr.innerHTML = Content;
    tbody.append(tr)
})
}