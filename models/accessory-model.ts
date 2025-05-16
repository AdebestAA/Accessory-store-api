import mongoose from "mongoose"

const accessorySchema = new mongoose.Schema({
    itemName: {
        type:String,
        required: [true,"item name must be provided"],
        trim: true,
        max:[50, "item name cant be more than 50 characters"]
    },
    category:{
        type:String,
        enum:["phone","laptop"],
        default:"phone"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports =  mongoose.model("accessories",accessorySchema)