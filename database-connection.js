// const mongoose = require('mongoose');

// mongoose.connect('mongodb://mongo/personTable2', { useNewUrlParser: true})

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const connectionString = 'mongodb://localhost/person22'

mongoose.connect(connectionString, { useNewUrlParser: true })