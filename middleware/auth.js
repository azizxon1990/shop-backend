const {Router} = require("express")
const jwt = require('jsonwebtoken');
require('dotenv').config()



const router = Router()

router.all('*', (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        next()
      } catch(err) {
        res.status(401).json({message: "Unauthorized"})
      }
})


module.exports = router