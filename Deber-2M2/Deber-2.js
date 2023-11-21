function multiplicacionConSumas() {
    const multiplicador = prompt("Ingresa el multiplicador:");
    const multiplicando = prompt("Ingresa el multiplicando:");
    let resultado = 0;
    for (let i = 0; i < Math.abs(multiplicador); i++) {
      resultado += multiplicador > 0 ? parseInt(multiplicando) : -parseInt(multiplicando);
    }
    return resultado;
  }
  
  alert("El resultado de la multiplicación es: " + multiplicacionConSumas());
  