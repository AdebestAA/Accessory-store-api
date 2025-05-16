import { Request, Response } from 'express';
const accessorySch = require("../models/accessory-model")


// get all accessories
const getAllAccessories = async(req:Request,res:Response):Promise<any>=>{

try {
    const getAccessory = await accessorySch.find({})

if (getAccessory.length < 1) {
    
    return res.json({
        message:"not items currently",
        success:true,
        data:getAccessory
    })
}
else{
return res.json({
    success:true,
    data:getAccessory
})
}
} catch (error) {
    console.log("error from db");
    
}}


// Add new item

const addNewAccessory = async(req:Request,res:Response):Promise<any>=>{
try {
    const valueFromClient = req.body
    console.log(valueFromClient);

    
    if (!valueFromClient) {
        return res.json({
            success:false,
            message:"empty field"
        })
    }
    if (!["laptop", "phone"].includes(valueFromClient.category)) {
        return res.status(500).json({
            message:"category can either be laptop or phone",
            success:false,
            data:valueFromClient.category
        })

    }
const createNew = await accessorySch.create(valueFromClient)



return res.status(200).json({
    success:true,
    message:"added new item to the database",
    data:createNew
})

} catch (error) {
    console.log("something went wrong in the database while add new content");
    
}

}

// getOneAccessory 
const getOnlyOneAccessory = async (req:Request,res:Response):Promise<any> =>{

    const getID  = req.params.id

    
    try {

        const findOne = await accessorySch.findById(getID)

        if (!findOne) {
        return res.status(500).json({
        message:"no item with this id",
        data:findOne,
        success:false
        }) 
        }
        
        return res.json({
        success: true,
        data:findOne
        })

    } catch (error) {
        
        console.log(error);
        
    }

}



// Edit accessory
const editAccessory = async (req:Request,res:Response):Promise<any> =>{
    const getID  = req.params.id
    const valueFromClient = req.body
    if (!valueFromClient || !getID) {
        return res.json({
            success:false,
            message:"empty field"
        })
    }
    
    try {
    const updateAccessory = await accessorySch.findByIdAndUpdate(getID,valueFromClient,{new:true})


    if (!updateAccessory) {
        
        return res.json({
            message:"item not found",
            success:false,
        })
    }
else{   
    return res.json({
        success:true,
        data:updateAccessory
    })
}
        
    } catch (error) {
        console.log(error);
    }
}


// Delete accessory

const deleteAccessory = async (req:Request,res:Response):Promise<any> =>{
    const getID  = req.params.id
    try {
        const deletedItem = await accessorySch.findByIdAndDelete(getID)
        if (deletedItem) {
            res.json({
                success:true,
                message:"item deleted",
                data:deletedItem
            })
        }
        return res.json({
            message:"no item with this id"
        })
    } catch (error) {
        console.log(error);
        
    }
}


module.exports = {
    getAllAccessories,
    addNewAccessory,
    getOnlyOneAccessory,
    editAccessory,
    deleteAccessory 
}