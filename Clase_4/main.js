const Contenedor = require ('./contenedor')

const contenedor = new Contenedor('./productos.txt')

contenedor.save({nombre: 'Pan sin Gluten', precio: 12000, categoria: 'Sin Glutten', descripcion: 'Pan sin glutten'})
