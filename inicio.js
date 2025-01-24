const tarea = document.getElementById("tarea").value;
const estado = document.getElementById("estado").value;
const fechaInicio = document.getElementById("fechaIni").value;
const fechaTermina = document.getElementById("fechaFin").value;
const botonagregar = document.getElementById("boton");

const url = "http://localhost:3000/tareas"



function guardartarea(){
    botonagregar.addEventListener("click", (e) => {
        e.preventDefault();
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
          
        
    })
}
guardartarea()
function mostrasTarea(){
    botonMostrar.addEventListener("click", (e) => {
        e.preventDefault();
        const guardarProceso = document.querySelector("proceso")
    fetch(url)
            .then(response => response.json())
            .then(tareas => {
                
                const tarea = tareas.find(r => r.estado == estado);
    
                if (tarea) {
                    guardarProceso.innerHTML = `
                        <p><strong>Titulo:</strong> ${tarea.tareaIni}</p>
                        <p><strong>Fecha de inicio:</strong> ${tarea.fechaInicio}</p>
                        <p><strong>Fecha termina:</strong> ${tarea.fechaTermina}</p>
                    `;
                } else {
                    guardarProceso.innerHTML = `<p>No hay tareas.</p>`;
                }
            })
            .catch(error => {
                console.error("error", error);
    
            });
    
    
    })
    

}



// function mostrarTarea(){
//     const guardarProceso = document.querySelector("proceso")
//     fetch(url)
//       .then(response => response.json())
//       .then(tareas =>{
//         const tareaProceso = tareas.filter(tarea =>
//             tarea.estado === "proceso"
//         );
        
//         if (tareaProceso.length > 0){
//             tareaProceso.forEach(tarea => {
//                 const tareadiv = document.createElement("div");
//                 tareadiv.classList.add("tareaGuardada");
//                 tareadiv.innerHTML = `
//                 <p>tarea : ${tarea.tareaIni}</p>
//                 <p>fecha inicio : ${tarea.fechaInicio}</p>
//                 <p>tarea : ${tarea.fechaTermina}</p>
//                 `
//                 guardarProceso.appendChild(tareadiv);
//             })
//             }else{
//                 alert("buscando tarea")
//             }

//       } )
//       .catch(error => {
//         console.error("error", error)
//       })
   
// }
// mostrarTarea()
guardartarea()
mostrasTarea()