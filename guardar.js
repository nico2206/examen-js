const tarea = document.getElementById("tarea").value;
const estado = document.getElementById("estado").value;
const fechaInicio = document.getElementById("fechaIni").value;
const fechaTermina = document.getElementById("fechaFin").value;
const botonagregar = document.getElementById("boton");

const url = "http://localhost:3000/tareas"



function guardartarea(){
    botonagregar.addEventListener("click", (e) => {
        const tarea = document.getElementById("tarea").value;
const estado = document.getElementById("estado").value;
const fechaInicio = document.getElementById("fechaIni").value;
const fechaTermina = document.getElementById("fechaFin").value;
        e.preventDefault();
        if (tarea.length > 2 && estado.length > 2){
          const tareaNueva = {
            tarea,
            estado,
            fechaInicio,
            fechaTermina
        }
        alert("Agregando tarea")
        fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(tareaNueva),
          })
          .then(response => response.json())
          .then(data => {
            console.log("tarea agregada:", data);
            alert("tarea registrada");
          })
          .catch(error => {
            console.error("error", error);
            alert("error");
          });
        }else{
          alert("agregue una tarea")
        }
        
          
        
    })
}

function mostrarTarea(){
botonMostrar.addEventListener("click", (e) => {
            e.preventDefault();
            const guardarProceso = document.querySelector(".proceso");
            const guardarPendiente = document.querySelector(".pendiente");
            const guardarCompleta = document.querySelector(".completadas");


     fetch(url)
       .then(response => response.json())
       .then(tareas =>{
         const tareaProceso = tareas.filter(tarea =>
             tarea.estado === "proceso"
         );
         const tareapendiente = tareas.filter(tarea =>
          tarea.estado === "pendiente"
      );
      const completa = tareas.filter(tarea =>
        tarea.estado === "completada"
    );
        
         if (tareaProceso.length > 0){
             tareaProceso.forEach(tarea => {
                 const tareadiv = document.createElement("div");
                 tareadiv.classList.add("tareaGuardada");
                 tareadiv.innerHTML = `
                 <p>Tarea : ${tarea.tarea}</p>
                 <p>Fecha inicio : ${tarea.fechaInicio}</p>
                 <p>Fechafinaliza : ${tarea.fechaTermina}</p>
                 `
                 guardarProceso.appendChild(tareadiv);
             })
             }else{
                 alert("buscando tarea")
             }
             if (tareapendiente.length > 0){
              tareapendiente.forEach(tarea => {
                  const tareadiv = document.createElement("div");
                  tareadiv.classList.add("tareaGuardada");
                  tareadiv.innerHTML = `
                  <p>Tarea : ${tarea.tarea}</p>
                  <p>Fecha inicio : ${tarea.fechaInicio}</p>
                  <p>Fechafinaliza : ${tarea.fechaTermina}</p>
                  `
                  guardarPendiente.appendChild(tareadiv);
              })
              }
              if (completa.length > 0){
                completa.forEach(tarea => {
                    const tareadiv = document.createElement("div");
                    tareadiv.classList.add("tareaGuardada");
                    tareadiv.innerHTML = `
                    <p>Tarea : ${tarea.tarea}</p>
                    <p>Fecha inicio : ${tarea.fechaInicio}</p>
                    <p>Fechafinaliza : ${tarea.fechaTermina}</p>
                    `
                    guardarCompleta.appendChild(tareadiv);
                })
                }
       } )
       .catch(error => {
         console.error("error", error)
       })


          })
        }
guardartarea()
mostrarTarea()