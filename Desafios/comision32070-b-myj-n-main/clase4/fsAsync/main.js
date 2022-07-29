const fs = require('fs')

// fs.writeFile('prueba.txt', 'Hola mundo', 'utf-8', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Archivo creado')
//     }
// })

// fs.appendFile('prueba.txt', '\n Hola mundo', 'utf-8', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Archivo creado')
//     }
// })

// fs.readFile('prueba.txt', 'utf-8', (err, contenido) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(contenido)
//     }
// })

// fs.unlink('prueba.txt', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Archivo eliminado')
//     }
// })

// fs.mkdir('./prueba/prueba1', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Directorio creado')
//     }
// })

fs.readdir('./prueba', (err, contenido) => {
    if (err) {
        console.log(err)
    } else {
        console.log(contenido)
    }
})