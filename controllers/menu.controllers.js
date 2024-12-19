import {Type,Category , subCategory} from "../models/menu.js"


const addTypeFunc = async(req,res)=>{
    const addTypeVar = req.body.addType;
    
    try {
        const addTypeInDb = await Type.create({
            type:addTypeVar
        })
        console.log(addTypeInDb);
        console.log("Data added in type successfully");
        return res.status(200).json({
            message:"Value store successfully"
        })
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"data didn't store",
            data:error.errorResponse.errmsg
        })
    }


}

const addCategoryFunc = async (req,res) =>{
    const categoryVar = req.body.category
    const typeVar = req.body.type

    
    try {

        // check type exist or not
        const isTypeExist = await Type.find({type:typeVar})
        if(isTypeExist != 0) {
            const addCategoryInDb = await Category.create({
                category:categoryVar
            })
            
            const addCategoryInType = await Type.updateOne({
                type:typeVar
            },
            {
                $push:{category:addCategoryInDb._id}
            }
            )
            console.log(addCategoryInDb)       



            console.log("Data added in Category Successfully");

            return res.status(200).json({
                message:"Data added Successfully"
            })

        }
        else return res.status(401).json({
            message:"Type you add is not correct"
        })
    } catch (error) {
        console.log(error);

        await Category.findOneandDelete({
            category:categoryVar
        })

        return res.status(500).json({
            message:"data not added successfully in category, Try it again.....",
            error : error
        })
    }

}


const addSubCategoryFunc = async (req,res)=>{
    const subCategoryVar = req.body.subcategory
    const categoryVar = req.body.category

    
    try {

        // check category exist or not
        const isCategoryExisted = await Category.find({category:categoryVar})

        console.log(isCategoryExisted);
        if(isCategoryExisted != 0) {
            console.log("category exist");
            const addSubCategoryInDb = await subCategory.create({
                subCategory:subCategoryVar
            })
            
            const addSubCategoryInCategory = await Category.updateOne({
                category : categoryVar
            },
            {
                $push:{subCategory:addSubCategoryInDb._id}
            }
            )
            console.log(addSubCategoryInDb)       

            console.log("Data added in sub category Successfully");

            return res.status(200).json({
                message:"Data added Successfully"
            })

        }
        else return res.status(401).json({
            message:"Category you add is not correct"
        })
    } catch (error) {
        console.log(error);

        await subCategory.findOneandDelete({
            subCategory:subCategoryVar
        })

        return res.status(500).json({
            message:"data not added successfully in category, Try it again.....",
            error : error
        })
    }

}


const addItemFunc = async (req,res)=>{
    
}


export {
    addTypeFunc,
    addCategoryFunc,
    addSubCategoryFunc,
    addItemFunc
}