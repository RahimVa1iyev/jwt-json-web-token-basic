const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) =>{
    const {username,password} = req.body
    console.log(username,password);

    // just for demo 
    const id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msj:'User created' , token})
}

const dashboard = (req,res) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomAPIError('No token provided',401)
    }

    const token = authHeader.split(' ')[1]

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        res.status(200).json({msj :`Hello ${decode.username}`})
    } catch (error) {
       throw new CustomAPIError(`Token is invalid`,401)
    }
}

module.exports = {dashboard,login}