const mongoose = require('mongoose');

//mongodb+srv://olbesdev:53Jop.57Ail$@cluster0.6zxsnby.mongodb.net/?retryWrites=true&w=majority
const URL = 'mongodb+srv://olbesdev:53Jop.57Ail@cluster0.6zxsnby.mongodb.net/?retryWrites=true&w=majority';

const connection = mongoose.connect(URL, {
    useNewUrlParser: true
});

console.log('MongoDB Conectado')

module.exports = connection;
