import { Router } from "express";
import { addTypeFunc ,addCategoryFunc, addSubCategoryFunc, addItemFunc} from "../controllers/menu.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const route = Router()


route.post('/addtype',addTypeFunc)   // add value in Type
route.post('/addcategory',addCategoryFunc)   // add value in category
route.post('/addsubcategory',addSubCategoryFunc)  // add value in sub category
route.post('/additem',upload.single('file'),addItemFunc)


export default route