const {category} = require('../config/prismaClient')


const getAllCategories = async (req, res)=>{
    const categories = await category.findMany()
    res.json(categories)
}

const getCategoryById = async (req, res)=>{
    const category = await category.findFirst({
        where:{
            id:parseInt(req.params.id)
        }
    })
    res.json(category) 
}

const createCategory = async (req, res)=>{
    
    let {name} = req.body
    const newCategory = await category.create({
        data:{
            name
        }
    })
    res.json(newCategory)
    
}

const updateCategory = async (req, res)=>{       
    let {name} = req.body
    const data = {name}
    
    const updatedCategory = await category.update({
        data,
        where:{
            id:parseInt(req.params.id)
        }
    })
    res.json(updatedCategory)
}

const deleteCategory = async (req, res)=>{       
    
    const deletedCategory = await category.delete({
        where:{
            id:parseInt(req.params.id)
        }
    })
    res.json(updatedCategory)
}

module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}