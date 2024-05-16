var datosGuardados = [];

function guardarTexto() {
  var texto = document.getElementById("textInput").value;
  datosGuardados.push(texto);
  document.getElementById("textInput").value = ""; // Limpiar el campo de texto después de guardar
}

function mostrarDatos() {
  var textoGuardadoDiv = document.getElementById("textoGuardado");
  textoGuardadoDiv.innerHTML = ""; // Limpiar el div antes de mostrar los datos nuevamente

  for (var i = 0; i < datosGuardados.length; i++) {
    var p = document.createElement("p");
    p.textContent = datosGuardados[i];
    textoGuardadoDiv.appendChild(p);
  }
}
