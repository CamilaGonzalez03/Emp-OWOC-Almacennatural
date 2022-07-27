let nombreApellido = prompt ("Ingrese su Nombre y Apellido");
    alert (`Hola ${nombreApellido}.`);

//PRODUCTOS.

let frutosSecos = [
    {nombre:"nuez blanca light", precio: 1900},
    {nombre:"almendra non parrel", precio: 3080},
    {nombre:"almendra guara", precio: 2120},
    {nombre:"castana", precio: 2680},
    {nombre:"mix clasico", precio: 1590},
    {nombre:"mix tropical", precio: 1180},
    {nombre:"mix arandano", precio: 1400},
    {nombre:"mix seco", precio: 1560},
];
    console.log(frutosSecos);

let frutasDesecadas = [
    {nombre:"arandano rojo", precio: 2210},
    {nombre:"ciruela sin carozo", precio: 1130},
    {nombre:"pasa negra", precio: 500},
    {nombre:"pasa rubia", precio: 890},
    {nombre:"tomate seco", precio: 1490},
];
    console.log(frutasDesecadas);

let semillas = [
    {nombre:"chia", precio: 1330},
    {nombre:"girasol pelado", precio: 490},
    {nombre:"lino", precio: 395},
    {nombre:"mix de semillas", precio: 630},
    {nombre:"quinoa", precio: 690},
    {nombre:"sesamo blanco", precio: 1170},
    {nombre:"sesamo integral", precio: 420},
    {nombre:"sesamo negro", precio: 1180},
];
    console.log(semillas);

let otrosProductos = [
    {nombre:"arroz yamani", precio: 230},
    {nombre:"azucar integral mascabo", precio: 430},
    {nombre:"coco rallado", precio: 1600},
    {nombre:"granola clasica", precio: 520},
    {nombre:"granola con pasta de mani", precio: 700},
    {nombre:"granola crocante", precio: 650},
    {nombre:"granola sin azucar", precio: 500},
    {nombre:"maiz frito", precio: 1190},
    {nombre:"mani saborizado", precio: 480},
    {nombre:"mantequilla de mani", precio: 380},
    {nombre:"sal rosada", precio: 430},
    {nombre:"yerba agroecologica", precio: 930},
];
    console.log(otrosProductos);

let listaEntera = frutosSecos.concat(semillas, otrosProductos, frutasDesecadas);
    console.log(listaEntera);

//BUSQUEDA DE UN PRODUCTO

let producto = prompt("¿Que producto desea?");
let busqueda = listaEntera.find(el => el.nombre == producto);
console.log(busqueda);

if (busqueda !='undefined'){
    alert(`Informacion de ${busqueda.nombre}, su precio por kilo es de: $${busqueda.precio}`);
}else {
    alert("No disponemos de ese producto. Disculpe las molestias.");
}



//SIMULADOR INTERACTIVO para el calculo en cuotas de un monto determinado.

let monto = prompt ("Por favor ingrese el monto a pagar. \nAboná hasta 3 Cuotas sin interés.");
let cuotas = prompt ("ingrese cantidad de cuotas. \nEscriba ESC para finalizar su consulta.");
while ( cuotas !== "ESC" && cuotas !== "esc"){
    if (cuotas <= 3) {
        let valor = monto / cuotas;
        alert(`El monto a pagar por mes será de $${valor}`);
        break;
    }
    else {
        let interes = monto * 1.25;
        let valor = interes / cuotas;
        alert(`El monto a pagar durante ${cuotas} meses, será de $${valor}`);
        break;
    }
}


//DATOS DE FACTURACION.

function Facturacion (nombre, apellido, direccion, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.dni = dni;
}
const nuevoCliente = ()=> {
    let nombreCliente = prompt("Ingrese su nombre:");
    let apellidoCliente = prompt("Ingrese su apellido:");
    let direccionCliente = prompt("Ingrese su direccion:");
    let dniCliente = parseInt(prompt("Ingrese su DNI:"));

const nuevoCliente = new Facturacion (nombreCliente, apellidoCliente, direccionCliente, dniCliente);
    console.log(nuevoCliente);
}