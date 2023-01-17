import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
        })
        console.log('db connected')
    }
    catch (error) {
        console.log('db disconnected')
        console.log(err)
    }
}