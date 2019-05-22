const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const connectionString = 'mongodb://mongo:27017/person22'

mongoose.connect(connectionString, { useNewUrlParser: true })