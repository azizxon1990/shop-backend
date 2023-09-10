const {Router} = require('express')
const router = Router()
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController')

router.get('/', getAllCategories)
router.get('/:id', getCategoryById)
router.post('/', createCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)


module.exports = router