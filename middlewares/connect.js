import mongoose from 'mongoose';

export default async function connect(req, res, next) {
    try {
        if (mongoose.connection.readyState != 1) {
            await mongoose.connect("mongodb+srv://root:root@cluster0.aq5mvxg.mongodb.net/mongoose_nextjs?retryWrites=true&w=majority");
            console.log('Database Connected Successfully!')
        }
        return next();
    }catch(error){
        return res.json({error: `Database Connection Error! -> ${error.message}`});
    }
};