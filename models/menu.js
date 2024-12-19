import {mongoose , Schema} from "mongoose";

const addType = new Schema({
    type:{
        type:String,
        required:true,
        unique:true
    },
    category:[
        {
            type:Schema.Types.ObjectId,
            ref:'addCategory'
        }
    ]
})

const addCategory = new Schema({
    category:{
        type:String,
        required:true
    },
    subCategory:[
        {
            type:Schema.Types.ObjectId,
            ref:'addSubCategory'
        }
    ]
    
})


const addSubCategory = new Schema({
    subCategory:{
        type:String,
        required:true
    },
    items:[
        {
            type:Schema.Types.ObjectId,
            ref:'addItems'
        }
    ]
    
})

const addItem = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    size:[{
        type:Number,
        required:true
    }]
})


const Item = mongoose.model('Item',addItem)
const Type = mongoose.model('Type',addType)
const Category = mongoose.model('Category',addCategory)
const subCategory = mongoose.model('SubCategory',addSubCategory)


export{
    Item,
    Type,
    Category,
    subCategory
}