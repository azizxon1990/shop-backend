const db = require("../config/prismaClient")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const loginPage = async (req, res) => {
    if (req.session.user) {
        res.redirect('/dashboard')
        return
    }
    res.render('login')
}


const login = async (req, res) => {
    const { email, password } = req.body
    if (!(email && password)) res.redirect("/auth/login")

    const user = await db.user.findUnique({
        where: {
            email: email
        }
    })

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(delete(user.password), process.env.JWT_SECRET);
        res.json({"access_token": token})
    } else {
        res.status(401).json({message: "Unauthorized"})

    }
}

const logout = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        jwt.destroy(token, process.env.JWT_SECRET);
        res.json({"success": true})
      } catch(err) {
        console.log(err);
        res.status(401).json({message: "Unauthorized"})
      }
}


module.exports = {
    login,
    logout,
    loginPage
}