const express = require ('express');
const { request } = require('express');
const { Router } = express;
const { Producto } = require ('./server');
const producto = new Producto('./productos.txt');

const app = express(); 

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const routerProductos = Router();
//Router by Product
routerProductos.get('/', async (req, res) => {
    const allProducts = await producto.getAll()
    try {
        //return(allProducts)
        res.send({status: 200, allProducts})
    } catch (error) {
        res.send({Status: 500, error})
    }
    res.json({
        ok: true,
        mensaje:'Todo bien en GET-routerProductos'
    })
});


//Router by ID
const routerProductosId = Router();
routerProductosId.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const objetoProducto  = req.body
        producto.updateById (objetoProducto)
        //console.log(objetoProducto)
        //res.send(objetoProducto)
        res.json({mensaje: objetoProducto})

    } catch (error) {
        console.log(error)
    }
});

routerProductosId.post('/:id', (req, res) => {
    const objetoProducto = req.body
    producto.save(objetoProducto)

    res.json({
        mensaje: ({objetoProducto})
    })
});
//*/

//Desafio 8 - Código

routerProductosId.put('/:id', (req, res) => {
    const {id} = req.params
    const objetoProducto  = req.body
    producto.updateById (objetoProducto)
    //const respuesta = producto.updateById(id, nombre, precio, categoria, descripcion )
    res.json({mensaje: objetoProducto})
    
})








//const routerById = Router();
//routerById.get();


app.use('/api/productos/', routerProductosId)
app.use('/api/productos', routerProductos)

//app.use('/api/productos/:id', routerById)



/*
app.get ('/', (req, res) => {
    res.send ('<h1 style= color:blue;>Hola Mundo </h1>')
});

app.get('/productos', async(req, res) => {
    try {
        const productos = await producto.getAll()
        res.send(productos)
    } catch (error) {
        console.log(error)
    }
});

app.get('/productosRandom', async(req, res) => {
    try {
        const productos = await producto.randomItem()
        res.send(productos)
    } catch (error) {
    console.log(error)
    }
});
*/
const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Escuchando en el puerto: ${server.address().port} `)
});

server.on('Ha sucedido un error', error => console.log(error))
