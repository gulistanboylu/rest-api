const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose)

const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    } 
});
PersonSchema.plugin(AutoIncrement, { inc_field: 'id' })

module.exports = mongoose.model('Person', PersonSchema)