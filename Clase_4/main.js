const Producto = require ('./contenedor')

const producto = new Producto('./productos.txt')

producto.save({nombre: 'Pan sin Gluten Grande', precio: 12000, categoria: 'Sin Glutten', descripcion: 'Pan sin glutten'})
