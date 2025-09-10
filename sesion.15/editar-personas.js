
let personaId = null;

// Cargar datos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID de la persona desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    personaId = urlParams.get('id');
    
    if (personaId) {
        cargarPersona(personaId);
        document.getElementById('titulo').textContent = 'Editar Persona';
    } else {
        document.getElementById('titulo').textContent = 'Agregar Persona';
    }
    
    // Configurar el formulario
    const form = document.getElementById('formPersona');
    form.addEventListener('submit', guardarPersona);
});
// Función para obtener una persona por ID
// Busca en el arreglo de personas y carga los datos en el formulario
function cargarPersona(id) {
    const persona = obtenerPersonaPorId(id);
    if (persona) {
        document.getElementById('personaId').value = persona.id;
        document.getElementById('nombre').value = persona.nombre;
        document.getElementById('apellidos').value = persona.apellidos;
        document.getElementById('fechaNacimiento').value = persona.fechaNacimiento;
    } else {
        alert('Persona no encontrada');
        volverATabla();
    }
}
// Clase Persona para manejar los datos de una persona
function guardarPersona(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    
    // Validar datos
    if (!nombre || !apellidos || !fechaNacimiento) {
        alert('Por favor, complete todos los campos');
        return;
    }
    
    // Validar fecha
    const fechaSeleccionada = new Date(fechaNacimiento);
    const fechaActual = new Date();
    if (fechaSeleccionada > fechaActual) {
        alert('La fecha de nacimiento no puede ser futura');
        return;
    }
    
    // Crear o actualizar persona
    if (personaId) {
        // Editar persona existente
        const persona = new Persona(parseInt(personaId), nombre, apellidos, fechaNacimiento);
        const editado = editarPersona(persona);
        if (editado) {
            alert('Persona actualizada correctamente');
            volverATabla();
        } else {
            alert('Error al actualizar la persona');
        }
    } else {
        // Agregar nueva persona
        const persona = new Persona(null, nombre, apellidos, fechaNacimiento);
        agregarPersona(persona);
        alert('Persona agregada correctamente');
        volverATabla();
    }
}
// Función para cancelar la edición o creación de una persona
// Muestra un mensaje de confirmación antes de cancelar
function cancelar() {
    if (confirm('¿Estás seguro de que quieres cancelar? Los cambios no guardados se perderán.')) {
        volverATabla();
    }
}
// Función para volver a la tabla de personas
// Redirige al usuario a la página de la tabla de personas
function volverATabla() {
    window.location.href = 'tabla-personas.html';
}
// Función para limpiar el formulario
// Resetea los campos del formulario y el ID de la persona
function limpiarFormulario() {
    document.getElementById('formPersona').reset();
    document.getElementById('personaId').value = '';
    personaId = null;
}
