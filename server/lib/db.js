import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'));
        await mongoose.connect(`${process.env.MONGODB_URI}/live-chat-app`)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}