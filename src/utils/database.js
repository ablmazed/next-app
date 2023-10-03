import mongoose from 'mongoose';


let isConnected = false; // track the connection
//const MONGODB_URI = "mongodb+srv://ablmazed:mzed1989M@cluster0.23f2v6n.mongodb.net"
const MONGODB_URI = "mongodb://127.0.0.1:27017/"


export const connectToDB = async () => {
    mongoose.set('strictQuery', true);


    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }


    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: "book_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })


        isConnected = true;


        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}
