const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) =>{
    const {username,password} = req.body

    // just for demo 
    const id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msj:'User created' , token})
}

const dashboard = (req,res) =>{
    console.log(req.user);
    res.status(200).json({msj :`Hello ${req.user.username}`})

}

module.exports = {dashboard,login}