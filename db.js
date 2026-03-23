import mongoose from "mongoose"

const mongoConnection = async()=> {
    try {
        const mongo_url = process.env.mongo_url
        await mongoose.connect(mongo_url)
        console.log("Database connected")
    } catch (error) {
        console.log("error in connection")
        console.log(error)
    }
}

export default mongoConnection
