const { inquirerMenu, pausa, leerInput, listaParaBorrar, confirmar, mostrarListadoChecklist } = require("./helpers/inquirer");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    //Imprime menu
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await leerInput();
        tareas.crearTarea(desc);

        break;
      case 2:
        tareas.listadoCompleto();

        // console.log(tareas.listadoArr);
        break;
      case 3:
        tareas.listarCompletadas();
        break;
      case 4:
        tareas.listarPendientes();
        
        break;
    case 5:
      const ids = await mostrarListadoChecklist(tareas.listadoArr);
      tareas.toggleCompletar(ids);
        
        break;
    case 6:
        const id = await listaParaBorrar(tareas.listadoArr);

        if (id !== '0') {
          const ok = await confirmar('¿Está segurísimo que lo quiere borrar???')
          if (ok) {
            tareas.borrarTarea(id);
            console.log('Tarea borrada correctamente')
          }
  
          
          
        }
        
        break;

      default:
        break;
    }

    guardarDB(tareas.listadoArr);

    if (opt !== 0) {
      await pausa();
    }
  } while (opt !== 0);
};

main();

