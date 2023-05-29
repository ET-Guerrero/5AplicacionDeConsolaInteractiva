const inquirer = require('inquirer');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que quieres?',
        choices: [
            {
                value: 1,
                name: '1. Crear tarea'
            },
            {
                value: 2,
                name: '2. Listar tareas'
            },
            {
                value: 3,
                name: '3. Listar tareas completadas'
            },
            {
                value: 4,
                name: '4. Listar tareas pendientes'
            },
            {
                value: 5,
                name: '5. Completar tareas'
            },
            {
                value: 6,
                name: '6. Borrar tarea'
            },
            {
                value: 0,
                name: '0. Salir'
            }
            
            
            
        ]

    }
]



const inquirerMenu = async() =>{    
    console.log('-----------Seleccione opcion-------------\n')
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async()=> {

    const question = [
        {
            type: 'input',
            name: 'Continuar',
            message: 'Pulsar ENTER, solo si tu quieres continuar',
            choices: ['Enter']
    
        }
    
    ]
    await inquirer.prompt(question)
}

const leerInput = async( message )=> {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length === 0) {
                    return 'Ingrese un valor por favor';                    
                }
                return true;
            }
    
        }
    
    ]

    const {desc} = await inquirer.prompt(question);
    return desc;
}


const listaParaBorrar = async(tareas=[])=> {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}`
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}` 
        }
    })

    choices.unshift({
        value: '0',
        name:'0 ' + 'Cancelar'
    })

    const pregutas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const {id} = await inquirer.prompt(pregutas);
    return id;    
}

const mostrarListadoChecklist = async(tareas=[])=> {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}`
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn)?  true : false
        }
    })

    // choices.unshift({
    //     value: '0',
    //     name:'0 ' + 'Cancelar'
    // })

    const pregutas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(pregutas);
    return ids;    
}

const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question)
    return ok;
}
module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listaParaBorrar,
    confirmar,
    mostrarListadoChecklist
}