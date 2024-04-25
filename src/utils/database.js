import mongoose from 'mongoose';

const connectDB = async () =>{
    if(mongoose.connections[0].readyState){
        return true;
    }

    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('MongoDb connected');
        return true;
        
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;