import mongoose from 'mongoose';

const connectDb = async () => {
    console.log('Connecting to mongoDB Atlas...');

    try {
        await mongoose.connect(
            'mongodb+srv://root:root@cluster0.rdqtswl.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Connected!');
    } catch (error) {
        console.log(error);
    }
};

export default connectDb;
