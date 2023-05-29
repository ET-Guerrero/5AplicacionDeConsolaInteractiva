require('colors')

const Tarea = require('./tarea')
class Tareas {
    _listado = {};

    get listadoArr(){

        const listado = []
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        });

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray  (tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    listadoCompleto (){
        this.listadoArr.forEach((el, i) => {
            console.log(`${String(i + 1).yellow }. ${el.desc} :: ${(el.completadoEn)? `Completado`.green: `Pendiente`.red}`)
        })
    }

    listarCompletadas(completadas = true){      

        let carr = this.listadoArr.filter(el=> el.completadoEn)

         carr.forEach((el, i) => {
             console.log(`${String(i+1).yellow }. ${el.desc} :: ${(el.completadoEn)? `${el.completadoEn}`.green: `Pendiente`.red}`)
         })

    }

    listarPendientes(completadas = true){

        let carr = this.listadoArr.filter(el=> !el.completadoEn)
        
         carr.forEach((el, i) => {
             console.log(`${String(i+1).yellow }. ${el.desc} :: ${(el.completadoEn)? `Completado`.green: `Pendiente`.red}`)
         })

    }
    borrarTarea(id=''){
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }
    toggleCompletar (ids = []){

        ids.forEach(id => {
            const tarea = this._listado[id]
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
                
            }
        })

    }



}

module.exports = Tareas;