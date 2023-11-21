'use script'

function calcularEdad() {
    const anioNacimiento = prompt("Ingresa tu año de nacimiento:");
    const anioActual = new Date().getFullYear();
    const edad = anioActual - parseInt(anioNacimiento);
    return edad;
  }
  
  alert("Tienes " + calcularEdad() + " años.");
  