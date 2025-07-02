const botones = document.getElementsByClassName("boton-agregar");
const contadorCarrito = document.getElementById('contador-carrito');
const botonLimpiar = document.getElementById('limpiarCarrito');
const productos = [
  { id: 1, nombre: "PlayStation 5", precio: 135000 },
  { id: 2, nombre: "Nintendo Switch", precio: 380000 },
  { id: 3, nombre: "Xbox Serie X", precio: 230000 }
];

for (let i = 0; i < botones.length; i++) {
    
  if (botones[i].id === 'limpiarCarrito') continue;

  botones[i].addEventListener("click", function() {
    const id = this.getAttribute("data-id");
    const producto = productos.find(p => p.id == id);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    contadorCarrito.innerHTML = carrito.length;
    alert("Producto Agregado al Carrito");
  });
}

if (botonLimpiar) {
  botonLimpiar.addEventListener('click', function() {
    localStorage.removeItem('carrito');
    contadorCarrito.innerHTML = 0;
    alert('Carrito limpiado');
 });
}