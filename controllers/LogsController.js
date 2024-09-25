const sequelize = require('../config/sequelize');
const Logs = require('../models/logs');

module.exports = {
    async findAll(req, res){
        try {
            const logs = await Logs.findAll();
            return res.status(200).json(logs);          
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    async createLog(req, res){
        try {
            const userId = req.authenticatedUser.id
            const action = req.action
            
            const log = await Logs.create({userId, action});
            console.log(log)
            return res.status(200).json({message: 'Concluído'});
        } catch (error) {
            console.log(error)
            return res.status(500).json(error.message)
        }
    }
}