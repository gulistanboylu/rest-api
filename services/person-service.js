const PersonModel = require('../models/person-model')

async function findAll() {
    return PersonModel.find()
}

async function add(person) {
    try {
        return PersonModel.create(person)
    } catch (error) {
    }
}

async function del(id) {
    return PersonModel.remove({ id })
}
async function update(id, person) {
    return PersonModel.findByIdAndUpdate(id, { person })
}
async function find(id) {
    return PersonModel.findOne({ id })
}

module.exports = {
    findAll,
    find,
    add,
    del,
    update
}
