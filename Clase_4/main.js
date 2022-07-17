const Producto = require ('./contenedor')

const producto = new Producto('./productos.txt')

//Llamado a la función "Agregar / Guardar Productos"
//producto.save({nombre: 'Aceite de Coco', precio: 42000, categoria: 'Orgánico', descripcion: 'Aceite de coco organico, libre de conservantes'})

//Llamado a la función "Mostrar producto por ID"
//producto.getById(2)

//Llamado a la función "Mostrar todos los productos"
//producto.getAll()

//Llamado a la función "Borrar producto por ID - deleteById"
//producto.deleteById(1)

//Llamado a la función "Borrar todos los productos"
//producto.deleteAll()