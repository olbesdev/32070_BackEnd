const fs = require('fs')
class Contenedor {
    constructor(ruta){
        this.ruta = ruta
    }

    async save(objeto){
     try{
         let dataArch = await fs.promises.readFile(this.ruta, 'utf-8')
         console.log(dataArch)
    }catch{
        console.log('mal')
    }
       //console.log(ruta)
   }
        
}

module.exports = Contenedor