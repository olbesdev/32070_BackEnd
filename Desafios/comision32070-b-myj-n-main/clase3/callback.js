// callback

// const ejecutar = ( callback ) =>{ 
//     console.log('uno')
//     return callback()
// }

// const saludar = () => console.log('Hola mundo')

// ejecutar( saludar )
// ejecutar( () => console.log('Hola mundo') )

// escribir archivo
// mandar arch






// function escribirYLoguear(texto, callbackParaLoguear) {
//     // simulamos que escribimos en un archivo!
//     console.log(texto)

    
//     // al finalizar, ejecutamos el callback
//     callbackParaLoguear('archivo escrito con éxito')
    
// }
//     // callback para loguear
//     const funcParametro = (mensajeParaLoguear) => {
//         const fecha = new Date().toLocaleDateString()

//         console.log(`${fecha}: ${mensajeParaLoguear}`)
//     }


//     // texto a escribir
//     const texto = 'hola mundo de los callbacks alsdjflasdjf lasjd flasdjf lñakjsdf asdlfjsa!'
   
//    escribirYLoguear(texto , funcParametro )

const operacion = (numero1, numero2 ,callback) => {    
    return callback(numero1, numero2)
}

const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const multiplicacion = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2

console.log(operacion(5, 10, suma))
console.log(operacion(5, 10, resta))
console.log(operacion(5, 10, multiplicacion))
console.log(operacion(5, 10, div))