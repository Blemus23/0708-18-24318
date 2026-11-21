// Validación del formulario de registro con JavaScript puro
const form = document.getElementById("form-registro");
const mensaje = document.getElementById("mensaje");

function mostrarError(campo, texto) {
  document.getElementById("error-" + campo).textContent = texto;
  document.getElementById(campo).classList.toggle("invalido", texto !== "");
}

form.addEventListener("submit", function (evento) {
  evento.preventDefault();          // evita que la página se recargue
  mensaje.textContent = "";

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value;
  let valido = true;

  if (nombre === "") {
    mostrarError("nombre", "El nombre es obligatorio");
    valido = false;
  } else {
    mostrarError("nombre", "");
  }

  if (!correo.includes("@")) {
    mostrarError("correo", "El correo debe contener @");
    valido = false;
  } else {
    mostrarError("correo", "");
  }

  if (contrasena.length < 6) {
    mostrarError("contrasena", "La contraseña debe tener al menos 6 caracteres");
    valido = false;
  } else {
    mostrarError("contrasena", "");
  }

  if (valido) {
    mensaje.textContent = "Registro exitoso";
    form.reset();                    // deja el formulario vacío
  }
});
