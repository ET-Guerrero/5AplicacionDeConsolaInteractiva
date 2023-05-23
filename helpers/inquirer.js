const inquirer = require('inquirer');


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que quieres?',
        choices: ['opt1', 'option2', 'option3']

    }
]

const inquirerMenu = async() =>{
    
    console.log('-----------Seleccione opcion-------------\n')

    const opt = await inquirer.prompt(preguntas);
    return opt;

}

const pausa = async()=> {

}



module.exports = {
    inquirerMenu,
    pausa
}