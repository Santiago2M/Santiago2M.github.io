// Cargar la tabla cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    cargarTablaPersonas();
});

function cargarTablaPersonas() {
    const tabla = document.getElementById('tablaPersonas');
    const tbody = tabla.querySelector('tbody') || tabla.createTBody();
    tbody.innerHTML = ''; // Limpiar contenido anterior
    
    const personas = obtenerPersonas();
    
    if (personas.length === 0) {
        const fila = tbody.insertRow();
        const celda = fila.insertCell();
        celda.colSpan = 4;
        celda.textContent = 'No hay personas registradas';
        celda.style.textAlign = 'center';
        celda.style.fontStyle = 'italic';
        return;
    }
    
    personas.forEach(persona => {
        const fila = tbody.insertRow();
        
        // Nombre
        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = persona.nombre;
        
        // Apellidos
        const celdaApellidos = fila.insertCell();
        celdaApellidos.textContent = persona.apellidos;
        
        // Fecha de nacimiento
        const celdaFecha = fila.insertCell();
        const fecha = new Date(persona.fechaNacimiento);
        celdaFecha.textContent = fecha.toLocaleDateString('es-ES');
        // Acciones
        const celdaAcciones = fila.insertCell();
        celdaAcciones.innerHTML = `
            <button onclick="editarPersonaTabla(${persona.id})" class="btn-editar">Editar</button>
            <button onclick="eliminarPersonaTabla(${persona.id})" class="btn-eliminar">Eliminar</button>
        `;
    });
}
// Funciones para manejar la edición y eliminación de personas en la tabla
function editarPersonaTabla(id) {
    // Redirigir a la página de edición con el ID como parámetro
    window.location.href = `editar-persona.html?id=${id}`;
}
// Función para eliminar una persona de la tabla
// Muestra un mensaje de confirmación antes de eliminar
function eliminarPersonaTabla(id) {
    if (confirm('¿Estás seguro de que quieres eliminar esta persona?')) {
        const eliminado = eliminarPersona(id);
        if (eliminado) {
            cargarTablaPersonas(); // Recargar la tabla
            alert('Persona eliminada correctamente');
        } else {
            alert('Error al eliminar la persona');
        }
    }
}
// Función para agregar una nueva persona
// Redirige a la página de edición sin ID para crear una nueva persona
function agregarNuevaPersona() {
    window.location.href = 'editar-persona.html';
}
