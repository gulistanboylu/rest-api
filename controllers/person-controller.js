const express = require('express')

const PersonService = require('../services/person-service')

const findAllOff = async (req, res, next) => {
    try {
        const people = await PersonService.findAll();
        res.json(people);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

const getPersonAction = async (req, res, next) => {
    try {
        const person = await PersonService.find(req.params.id)
        res.json(person)
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

const personUpdateAction = async (req, res, next) => {
    try {
        const person = await PersonService.update(req.params.id, req.body)
        res.json(person)
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}
const addPersonAction = async (req, res, next) => {
    try {
        const person = await PersonService.add(req.body)
        res.json(person)
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

const deletePersonAction = async (req, res, next) => {
    try {
        await PersonService.del(req.params.id)
        res.send('Person succesfully deleted') 
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}
module.exports = {
    findAllOff,
    getPersonAction,
    personUpdateAction,
    addPersonAction,
    deletePersonAction
} 
