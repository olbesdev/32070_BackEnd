
// import fs from 'fs'
const fs = require('fs')


// sobreescribir el archivo
// try {
//     fs.writeFileSync('./prueba.txt', 'This file was created by Node.js', 'utf8')
    
// } catch (error) {
//     console.log(error)
// }

// agregar al archivo
try {
    fs.appendFileSync('./prueba.txt', '\n This file was created by Node.js', 'utf-8')

    console.log('Archivo agregado')
} catch (error) {
    console.log(error)
}


try {
    const data = fs.readFileSync('./prueba.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log(error)
}

// borrar el archivo
try {
    fs.unlinkSync('./prueba.txt')
    console.log('Archivo borrado')
} catch (error) {
    console.log(error)
}
































































//escribir el archivo sincronico
// try {
//     fs.writeFileSync('prueba.txt', 'Hola mundo')
// } catch (error) {
//     console.log(error)
// }

// reescribir archivo sincronico
// try {
//     fs.appendFileSync('prueba.txt', '\n Hola mundo', 'utf8')
// } catch (error) {
//     console.log(error)
// }


// // borrar un archivo sincronico
// try {
//     fs.unlinkSync('prueba.txt')
// } catch (error) {
//     console.log(error)
// }

// // leer el archivo sincronico
// try {
//     let archivo = fs.readFileSync('prueba.txt', 'utf-8')
//     console.log(archivo)
// } catch (error) {
//     console.log(error)
// }