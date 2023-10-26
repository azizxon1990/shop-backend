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
    
    let {name, icon} = req.body
    const newCategory = await category.create({
        data:{
            name,
            icon
        }
    })
    res.json(newCategory)
    
}

const updateCategory = async (req, res)=>{       
    let {name, icon} = req.body
    const data = {name, icon}
    
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
    res.json(deletedCategory)
}

module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}