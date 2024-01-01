const jwt = require('jsonwebtoken')
const Unauthorized = require('../errors/unauthenticated')

const authenticationMiddleware = async (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new Unauthorized('No token provided')
    }

    const token = authHeader.split(' ')[1]

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const {id,username} = decode
        req.user = {id,username}
        next()
    } catch (error) {
       throw new Unauthorized(`Token is invalid`)
    }
}

module.exports = authenticationMiddleware