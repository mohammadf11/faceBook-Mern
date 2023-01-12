import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
        })

    }
    catch (error) {
        console.log(err)
    }
}