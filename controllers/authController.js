const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator')

const  generateAccessToken = (id, roles) => {
    const payload = {
        id, roles
    }
    return jwt.sign(payload, process.env.secret, {expiresIn: "24h"})
}

class authController {
    async registration(req, res) {
        try {
            const errors =validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Error in registration process", errors})
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
            return res.json({message: "User registered"})
        } catch(e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                res.status(400).json({message: `User ${username} doesnt exist `})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                res.status(400).json({message: `Wrong pass`})
            }
            const token = generateAccessToken(user._id, user.role)
            return res.json({token})


        } catch(e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)

            res.json('server work')
        } catch(e) {

        }
    }
}

module.exports = new authController()