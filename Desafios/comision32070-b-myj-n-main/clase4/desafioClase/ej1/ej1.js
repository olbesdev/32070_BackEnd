















































// guardar en un archivo fecha y hora
const fs = require('fs')
try {
    const fecha = new Date().toString()
    fs.writeFileSync('fyh.txt', fecha, 'utf-8')

    // leer el archivo fecha y hora
    const archivo = fs.readFileSync('fyh.txt', 'utf-8')
    console.log(archivo)

} catch (error) {
    console.log(error)
}
    

