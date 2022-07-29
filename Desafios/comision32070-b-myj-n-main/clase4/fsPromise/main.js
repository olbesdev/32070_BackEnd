// console.log('hola como vienne?')

const fs = require('fs')


// leer un archivo promesa
// function leerArch() {
//     fs.promises.readFile('./prueba.txt', 'utf-8')
//     .then(contenido => {
//         console.log(contenido)
//     })
//     .catch(err => console.log(err) )
// }

// leerArch()

// escribir un archivo promesa
// async function escribirArch() {
//     try {
//         await fs.promises.writeFile('./prueba.txt', 'hola escritura', 'utf-8')
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// escribirArch()

// agregar texto a un archivo con appendFile
// async function agregarTexto() {
//     try {
//         await fs.promises.appendFile('./prueba.txt', '\n hola escritura', 'utf-8')
//     } catch (error) {
//         console.log(error)
//     }
// }

// agregarTexto()


// renombrar un archivo con promesas
// async function renombrarArch() {
//     try {
//         await fs.promises.rename('./prueba.txt', './prueba2.txt')
//     } catch (error) {
//         console.log(error)
//     }
// }

// renombrarArch()


const  leerArch1 = async () => {
    try {
        const contenido = await fs.promises.readFile('./prueba.txt', 'utf-8')
        const info = JSON.parse(contenido)
        info.contenidoObj.author = 'Coderhouse'
        console.log(info.contenidoObj.author)
    } catch (error) {
        console.log(error)
    }
}

leerArch1()

