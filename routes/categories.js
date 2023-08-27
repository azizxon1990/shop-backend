const {Router} = require('express')
const router = Router()
const { getAllCategories, getCategoryById, createCategory, updateCategory } = require('../controllers/categoryController')

router.get('/', getAllCategories)
router.get('/:id', getCategoryById)
router.post('/', createCategory)
router.put('/:id', updateCategory)


module.exports = router