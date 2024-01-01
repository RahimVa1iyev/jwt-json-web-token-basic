const jwt = require('jsonwebtoken')


const login = async (req,res) =>{
    const {username,password} = req.body
    console.log(username,password);

    // just for demo 
    const id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msj:'User created' , token})
}

const dashboard = (req,res) =>{
    res.status(200).json({})
}

module.exports = {dashboard,login}