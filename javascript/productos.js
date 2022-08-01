const Clickbutton = document.querySelectorAll('.boton')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', agregarCarrito)
})

function agregarCarrito(e){
  const boton = e.target
  const item = boton.closest('.container__card')
  const itemTitulo = item.querySelector('.card__titulo').textContent;
  const itemPrecio = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card__imagen').src;
  console.log (itemPrecio);

  
    const nuevoItem = {
    titulo: itemTitulo,
    precio: itemPrecio,
    imagen: itemImg,
    cantidad: 1
  }

  agregarProductoCarrito(nuevoItem)
}

function agregarProductoCarrito(nuevoItem){
  carrito.push(nuevoItem)
  renderCarrito()
}

function renderCarrito(){
  console.log(carrito)
}