import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', ()=> console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URL}/mediconnect`)


}


export default connectDB