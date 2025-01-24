const inicio = document.querySelector('.inicioSeccion');
const inicio1 = document.querySelector('.ingreso');
const registroInicio1 = document.querySelector('.registroInicio');
const registrarUsuarioBtn = document.getElementById('registrarUsuario');
const url = "http://localhost:3000/usuarios"

registrarUsuarioBtn.addEventListener('click', (i) => {
  i.preventDefault(); 
  const nombre = document.getElementById('nombreRegistro').value;
  const contrasena = document.getElementById('contrasenaRegistro').value;
  const nuevoUsuario = { nombre, contrasena };

 
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoUsuario),
  })
  .then(response => response.json())
  .then(data => {
    console.log("Usuario registrado:", data);
    alert("Registro exitoso");
  })
  .catch(error => {
    console.error("Error al registrar el usuario:", error);
    alert("Hubo un error al registrar el usuario");
  });
});

