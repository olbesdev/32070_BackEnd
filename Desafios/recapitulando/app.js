const fs = require('fs')
const express = require('express')






/* -------------------------------------------------------------------------- */
/*                                   EXPRESS                                  */
/* -------------------------------------------------------------------------- */

const app = express();

/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */

app.get('/', (req, res) => {
    res.send("Hello World")
    //res.send({hello: "world"}) podemos traer un objeto JSON
})

/* -------------------------------------------------------------------------- */
/*                             SERVER_DECLARATION                             */
/* -------------------------------------------------------------------------- */

//! const PORT = process.env.PORT 
const server = app.listen(4000, () => {
    console.log(`Server Running on http://localhost:${server.address().port}`)

}) 