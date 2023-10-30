
// Define un array de guitarras eléctricas
const guitarrasElectricas = [
  { marca: "Fender", modelo: "Stratocaster", precio: 1000 },
  { marca: "Gibson", modelo: "Les Paul", precio: 1500 },
  { marca: "Ibanez", modelo: "RG550", precio: 800 },
  { marca: "ESP", modelo: "EC-1000", precio: 1200 },
  { marca: "Jackson", modelo: "Soloist", precio: 1100 },
];

// Inicializa el carrito de compras como un array vacío
const carrito = [];

// Función para mostrar guitarras en un formato legible
function mostrarGuitarras(guitarras) {
  let guitarraInfo = "Guitarras disponibles:\n";
  guitarras.forEach((guitarra, index) => {
    guitarraInfo += `${index + 1}. Marca: ${guitarra.marca}, Modelo: ${guitarra.modelo}, Precio: $${guitarra.precio}\n`;
  });
  alert(guitarraInfo);
}

// Función para mostrar el carrito de compras
function mostrarCarrito() {
  if (carrito.length === 0) {
    alert("El carrito de compras está vacío.");
  } else {
    let carritoInfo = "Carrito de compras:\n";
    carrito.forEach((item, index) => {
      carritoInfo += `${index + 1}. Marca: ${item.marca}, Modelo: ${item.modelo}, Precio: $${item.precio}\n`;
    });
    alert(carritoInfo);
  }
}

// Función para agregar un producto al carrito
function agregarAlCarrito() {
  mostrarGuitarras(guitarrasElectricas);
  const seleccion = parseInt(prompt("Elige el número de la guitarra que deseas agregar al carrito:"));
  if (seleccion >= 1 && seleccion <= guitarrasElectricas.length) {
    const guitarraSeleccionada = guitarrasElectricas[seleccion - 1];
    carrito.push(guitarraSeleccionada);
    alert(`Has agregado ${guitarraSeleccionada.marca} ${guitarraSeleccionada.modelo} al carrito.`);
  } else {
    alert("Selección no válida. Por favor, elige un número válido.");
  }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito() {
  mostrarCarrito();
  if (carrito.length === 0) {
    return;
  }
  const seleccion = parseInt(prompt("Elige el número del producto que deseas eliminar del carrito:"));
  if (seleccion >= 1 && seleccion <= carrito.length) {
    const productoEliminado = carrito.splice(seleccion - 1, 1)[0];
    alert(`Has eliminado ${productoEliminado.marca} ${productoEliminado.modelo} del carrito.`);
  } else {
    alert("Selección no válida. Por favor, elige un número válido.");
  }
}

// Menú de opciones
while (true) {
  const opcion = prompt("Elije una opción:\n1. Mostrar guitarras disponibles\n2. Buscar y filtrar guitarras\n3. Agregar al carrito\n4. Mostrar carrito\n5. Eliminar del carrito\n6. Salir");

  switch (opcion) {
    case "1":
      mostrarGuitarras(guitarrasElectricas);
      break;
    case "2":
      const filtro = prompt("Ingresa una palabra clave para buscar las guitarras:");
      const guitarrasFiltradas = guitarrasElectricas.filter(guitarra => 
        guitarra.marca.toLowerCase().includes(filtro.toLowerCase()) || guitarra.modelo.toLowerCase().includes(filtro.toLowerCase())
      );
      mostrarGuitarras(guitarrasFiltradas);
      break;
    case "3":
      agregarAlCarrito();
      break;
    case "4":
      mostrarCarrito();
      break;
    case "5":
      eliminarDelCarrito();
      break;
    case "6":
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción no válida. Por favor, elige una opción válida.");
      break;
  }

  if (opcion === "6") {
    break;
  }
}
