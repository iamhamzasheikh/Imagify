import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Database is Connected');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Database connection error:', err);
        });

        await mongoose.connect(`${process.env.MONGODB_URI}/Imagify`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};

export default connectDB;
