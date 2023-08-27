const {Router} = require('express')
const router = Router()
const { getAllUsers, getUserById, createUser, updateUser } = require('../controllers/userController')

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)


module.exports = router