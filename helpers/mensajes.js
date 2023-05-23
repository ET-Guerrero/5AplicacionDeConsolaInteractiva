const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('-----------Seleccione opcion-------------\n')

        console.log('1. Crear Tareas')
        console.log('2. Lista de tareas ')
        console.log('3. Lista de tareas completadas')
        console.log('4. Lista de tareas pendientes')
        console.log('5. Completar tareas')
        console.log('6. Borrar tareas')
        console.log('0. Borrar tareas\n')

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione un opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        })

    })

}

const pausa = () => {
    return new Promise ( resolve => {
       const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question(`Presione ENTER para continuar`, (opt) =>{
        readline.close()
        resolve(opt)
    }) 
    })

    


}







module.exports = {
    mostrarMenu,
    pausa
}