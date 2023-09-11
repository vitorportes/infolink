import mongoose from 'mongoose';

const connectDb = async () => {
    console.log('Connecting to mongoDB Atlas...');

    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected!');
    } catch (error) {
        console.log(error);
    }
};

export default connectDb;
