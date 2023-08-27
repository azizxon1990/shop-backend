const {user} = require('../config/prismaClient')
const bcrypt = require('bcrypt')


const getAllUsers = async (req, res)=>{
    const users = await user.findMany()
    res.json(users)
}

const getUserById = async (req, res)=>{
    const user = await user.findFirst({
        where:{
            id:parseInt(req.params.id)
        }
    })
    res.json(user) 
}

const createUser = async (req, res)=>{
    
    let {email, password} = req.body
    password = await bcrypt.hash(password, 10)
    const newUser = await user.create({
        data:{
            email,
            password
        }
    })
    res.json(newUser)
    
}

const updateUser = async (req, res)=>{       
    let {email, password} = req.body
    const data = {email}
    if (password) {
        password = await bcrypt.hash(password,10)
        data.password = password;
    }
    
    const updatedUser = await user.update({
        data,
        where:{
            id:parseInt(req.params.id)
        }
    })
    res.json(updatedUser)
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser
}