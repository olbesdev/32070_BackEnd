
// console.log('hola')

function funcionA(){
    console.log('1')
    // no bloquea el hilo
    // setTimeout(() => {
        funcionB()        
    // }, 0)

    console.log('2')
}

function funcionB() {
    console.log('3')
    funcionC()
    console.log('4')
}

function funcionC() {
    // setTimeout(() => {
        console.log('5')
    // })
}

funcionA()




// function funcA(){
//     console.log("1")
//     funcB()
//     console.log("2")
// }
// function funcB(){
//     console.log("3")
//     funcC()
//     console.log("4")
// }
// function funcC(){
//     console.log("5")
// }

// funcA()

