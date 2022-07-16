const fs = require('fs')
class Producto {
    constructor(ruta){
        this.ruta = ruta
    }
//Guardar Producto desde un objeto ✔ 
    async save(objeto){
        try{
            let dataArch = await fs.promises.readFile(this.ruta, 'utf-8') //Lee el archivo de la ruta especificada en formato texto
            let dataArchParse = JSON.parse(dataArch) //Parse a JavaScript (JSON) el archivo en formato texto y lo guardamos en la variable
            if (dataArchParse.length) { //Condicion 
                //Si dataArchParse.length != a cero(0) genera un nuevo objeto y "id" consecutivo del anterior
                await fs.promises.writeFile(this.ruta, JSON.stringify([...dataArchParse, {...objeto, id: dataArchParse.length + 1} ], null, 2))
            } else {
                //Si devuelve falso ó cero(0) dataArchParse.lenght => Crea un nuevo objeto
                await fs.promises.writeFile(this.ruta, JSON.stringify([{...objeto, id: dataArchParse.length + 1}], null, 2))
            }
            //Mostramos confirmación de Producto guardado por consola. Se muestra el ID generado.
            console.log(`Producto guardado. Se identifica con el ID: ${dataArchParse.length + 1}`)
        }catch{
            console.log('Algo salío mál (en .save) ')
        }
    
    }
//Traer producto por el ID
    async getById(id){
        try {
            let dataArch = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchParse = JSON.parse(dataArch)
            let producto = dataArchParse.find(producto => producto.id === id)
            if (producto) {
                //return producto //Devuelve el producto con el ID solicitado
                console.log(producto)
            } else {
                console.log(`El producto con el ID: ${id} no existe`)
            }
        } catch (error) {
            console.log(error)
        }
    }
        
}

module.exports = Producto