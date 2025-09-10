///personas-servicio


//Se declara un arreglo vacío que se usará para guardar objetos Persona.

let personas = []

// Clase Persona que representa a una persona con sus atributos y métodos

class Persona {

    constructor(id, nombre, apellidos, fechaNacimiento,localidad) {
      this.id = id;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.fechaNacimiento = fechaNacimiento;
    }
  
    obtenerNombreCompleto() {
      return this.nombre + " " + this.apellidos;
    }
  
    obtenerEdad(){
      const fechaActual = new Date();
      const fechaNac = new Date(this.fechaNacimiento);
      return fechaActual.getFullYear() - fechaNac.getFullYear();
    }
}

// Funciones para manejar las operaciones CRUD de personas
function generarId() {
  const personas = obtenerPersonas();
  return personas.length > 0 ? Math.max(...personas.map(p => p.id)) + 1 : 1;
}
// Función para agregar una nueva persona al almacenamiento local
// Si la persona no tiene un ID, se genera uno nuevo
function agregarPersona(persona) {
  personas = obtenerPersonas();
  if (!persona.id) {
    persona.id = generarId();
  }
  personas.push(persona);
  guardarPersonas(personas);
}
// Función para editar una persona existente
// Busca la persona por ID y actualiza sus datos
function editarPersona(persona){
  personas = obtenerPersonas();
  const index = personas.findIndex(p => p.id === persona.id);
  if(index !== -1){
    personas[index] = persona;
    guardarPersonas(personas);
    return true;
  }
  return false;
}
// Función para eliminar una persona por ID
// Filtra el arreglo de personas para eliminar la persona con el ID especificado
function eliminarPersona(id){
  personas = obtenerPersonas();
  const personasOriginales = personas.length;
  personas = personas.filter(p => p.id !== parseInt(id));
  guardarPersonas(personas);
  return personas.length < personasOriginales;
}
// Función para obtener una persona por su ID
// Busca en el arreglo de personas y devuelve la persona que coincide con el ID
function obtenerPersonaPorId(id){
  personas = obtenerPersonas();
  return personas.find(p => p.id === parseInt(id));
}
// Funciones para manejar el almacenamiento local de personas
// Estas funciones permiten obtener y guardar el arreglo de personas en el localStorage
function obtenerPersonas() {
  try {
    const personasStorage = localStorage.getItem("personas");
    if (!personasStorage) {
      return [];
    }
    const personasData = JSON.parse(personasStorage);
    return personasData.map(persona => new Persona(persona.id, persona.nombre, persona.apellidos, persona.fechaNacimiento,));
  } catch (error) {
    console.error('Error al obtener personas:', error);
    return [];
  }
}
// Función para guardar el arreglo de personas en el localStorage
// Convierte el arreglo de personas a JSON y lo almacena en el localStorage
function guardarPersonas(personas) {
  try {
    localStorage.setItem("personas", JSON.stringify(personas));
  } catch (error) {
    console.error('Error al guardar personas:', error);
  }
}