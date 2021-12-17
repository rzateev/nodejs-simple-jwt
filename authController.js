const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator')

class authController {
    async registration(req, res) {
        try {
            const errors =validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистраци", errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message: "User already exists"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const useRole = await Role.findOne({value: "USER"})
            const user = new User({username, password: hashPassword, roles:[useRole.value]})
            await user.save()
            return res.json({message: "User registred"})
        } catch(e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
        } catch(e) {
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUsers(req, res) {
        try {


            res.json('server work')
        } catch(e) {

        }
    }
}

module.exports = new authController()