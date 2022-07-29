// inicio
// console.log('clase 3')

// funciones

// const saludar = (nombre) => {
//     console.log('saludo')
//     return nombre
// }



// saludar('fede')

const promediar = (nota1, nota2) => (nota1 + nota2) / 2
let promedio = promediar(10, 20)
console.log( promedio )










// Ejemplo de funciones flecha







// *****************************************************************************************
const sumar = (a,b) => a + b
let a= 46
let b = 54
const suma= sumar(a,b)

console.log(`La suma de a: ${a}, mas b: ${b}. Da como resultado: ${suma}  `)

//*************************************************************************************************
const sumar2 = (a,b) => {
    let suma = a+b
    return suma
}
const suma2= sumar2(a,b)
console.log(`La suma de a: ${a}, mas b: ${b}. Da como resultado: ${suma2}  `)
//-------------------------------------------------------------------------------------------------

const dobeDe = a => a * 2
console.log(`el doble de a: ${a} es ${dobeDe(a)} `)
//-------------------------------------------------------------------------------------------------

const getPersona = _ => ( { nombre: 'juan', edad: 30 } )

console.log(getPersona())