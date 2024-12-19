import mongoose from "mongoose";

const conn = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`)
        // console.log(connection);
        console.log("Db is connected");
    } catch (error) {
        console.log(error,"Their is issue in connection");
        throw error
    }
}


export default conn