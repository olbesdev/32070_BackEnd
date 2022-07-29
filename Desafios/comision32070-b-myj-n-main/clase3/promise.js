// promise

    // const division = ( dividendo, divisor ) =>{
    //     // acciones
    //     return new Promise( (resolve, reject) => {
    //         if( divisor === 0 ){
    //             reject('No se puede dividir por 0');
    //         }else{
    //             resolve(dividendo / divisor);
    //         }
    //         // acciones
    //         reject('todo mal 400')
    //     } )
    // } 

    // division(10, 2)
    // .then(respuesta => respuesta * 2)
    // .catch(err => console.log(err))
    // .then(respuesta => respuesta * 2)
    // .then(respuesta => respuesta * 2)
    // .then(resp => console.log(resp))














Promise.reject('todo mal')
.then( num => num + 1 )
.then( num => num * 2 )
.then( num => {
    if(num==22) throw 'Error'
    else return 80
})
.then( num => 30 )
.then( num => num / 2 )
.then( console.log )
.catch( console.log )