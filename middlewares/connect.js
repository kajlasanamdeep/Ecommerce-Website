import mongoose from 'mongoose';

export default async function connect(req, res, next) {
    try {
        if (mongoose.connection.readyState != 1) {
            await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_nextjs");
            console.log('Database Connected Successfully!')
        }
        return next();
    }catch(error){
        return res.json({error: `Database Connection Error! -> ${error.message}`});
    }
};