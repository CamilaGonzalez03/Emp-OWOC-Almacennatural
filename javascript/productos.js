//Agrego producto al carrito
const ClickBoton = document.querySelectorAll('.boton')
const tbody = document.querySelector('.tbody')
let carrito = []

ClickBoton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
  const boton = e.target;
  const item = boton.closest('.container__card')
  const itemImagen = item.querySelector('.card__imagen').src;
  const itemTitulo = item.querySelector('.card__titulo').textContent;
  const itemPrecio = item.querySelector('.precio').textContent;

  const newItem= {
    imagen: itemImagen,
    titulo: itemTitulo,
    precio: itemPrecio,
    cantidad: 1
  }

  addItemCarrito(newItem)

}

function addItemCarrito(newItem){
  
  const InputElemento = tbody.getElementsByClassName('input__elemento')
  for(let i=0; i < carrito.length; i++){
    if(carrito[i].titulo.trim() === newItem.titulo.trim()){
      carrito[i].cantidad++;
      const inputValue = InputElemento[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }

  carrito.push(newItem)

  renderCarrito()
}

function renderCarrito(){
  
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
      <th scope="row">1</th>
      <td class="table__productos">
        <img class="table__imagen" src=${item.imagen} alt="">
        <p class="table__titulo">${item.titulo}</p>
      </td> 
      <td class="table__precio">${item.precio}</td>
      <td class="table__cantidad">
        <input type="number" min="1" value=${item.cantidad} class="input__elemento">
        <button class="delete btn btn-danger">X</button>
      </td>
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)

  })

  CarritoTotal()

}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const titulo = tr.querySelector('.table__titulo').textContent;
  
  for(let i=0; i<carrito.length; i++){
    
    if(carrito[i].titulo.trim() === titulo.trim()){
      carrito.splice(i, 1)
    }
    }
  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const titulo = tr.querySelector(".table__titulo").textContent;
  
  carrito.forEach(item => {
    if(item.titulo.trim() === titulo){
      sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
  console.log(carrito)
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}
