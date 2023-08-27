const {Router} = require("express")
const router = Router()
const { loginPage, login, logout } = require("../controllers/loginController")

router.get('/login', loginPage)
router.post('/login', login)
router.get('/logout', logout)


module.exports = router