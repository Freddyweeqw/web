// JavaScript para mostrar la fecha y hora actual
function mostrarFechaHora() {
    const fechaHoraElemento = document.getElementById('fecha-hora');
    const ahora = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const fechaHoraFormateada = ahora.toLocaleDateString('es-ES', opciones);
    fechaHoraElemento.textContent = fechaHoraFormateada;
}

// Actualizar la fecha y hora cada segundo
setInterval(mostrarFechaHora, 1000);

// JavaScript para manejar el formulario de agregar artículo
const formularioArticulo = document.getElementById('formulario-articulo');
const listaArticulos = document.getElementById('lista-articulos');

formularioArticulo.addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;

    const articuloHTML = `<div><h3>${titulo}</h3><p>${descripcion}</p></div>`;
    listaArticulos.insertAdjacentHTML('beforeend', articuloHTML);

    // Limpiar el formulario después de agregar el artículo
    formularioArticulo.reset();
});

// JavaScript para contar la cantidad de artículos y mostrarla
function contarArticulos() {
    const cantidadArticulos = document.querySelectorAll('#inicio div').length;
    const contadorElemento = document.createElement('p');
    contadorElemento.textContent = `Total de Artículos: ${cantidadArticulos}`;
    listaArticulos.appendChild(contadorElemento);
}

contarArticulos();
