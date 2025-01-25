
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
const iniciarSesionBtn = document.getElementById('iniciarSesion');

iniciarSesionBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    const nombreInicio = document.getElementById('nombreInicio').value;
    const contrasenaInicio = document.getElementById('contrasenaInicio').value;
    fetch("http://localhost:3000/usuarios")
        .then(response => response.json())
        .then(usuarios => {
            const usuarioEncontrado = usuarios.find(usuario => 
                usuario.nombre === nombreInicio && usuario.contrasena === contrasenaInicio 
            );

            if (usuarioEncontrado) {
                console.log("Usuario encontrado:", usuarioEncontrado);
                alert("Inicio de sesión exitoso");
                window.location.href = "./index.html";
            

            } else {
                alert("Nombre o contraseña incorrectos");
            }
        })
        .catch(error => {
            console.error("Error al verificar el usuario:", error);
            alert("Hubo un error al iniciar sesión");
        });
});


