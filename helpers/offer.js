import mongoose from "mongoose";
import offerModel from "../models/offerModel";
import productModel from "../models/productModel";

const create = async function (req) {
    try {

        let payload = req.body;
        let product = await productModel.findById(mongoose.Types.ObjectId(payload.product));
        if(!product || product.isDeleted){
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }    
            return{
                status: 404,
                message: "PRODUCT_NOT_FOUND"    
            }
        }

        if (req?.file) {
            payload.image_url = `/images/${req.file.filename}`;
            payload.image_path = req.file.path;
        }
        await offerModel.create(payload);

        return {
            status: 201,
            message: "OFFER_CREATED_SUCCESSFULLY"
        };

    } catch (error) {
        if (req?.file) {
            fs.unlinkSync(req.file.path);
        }
        throw error;

    }
};

const getAll = async function (req) {
    try {
        let payload = req.query;
        let query = { isDeleted: false,isActive:true };
        if (payload?.discount) {
            query.discount = { $gte: parseInt(payload.discount) };;
        }

        let offers = await offerModel.aggregate([
            {
                $match: query
            },
            {
                $lookup: {
                    from: 'products',
                    localField: 'product',
                    foreignField: '_id',
                    as: 'product'
                }
            },
            {
                $unwind: "$product"
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    original_price:{$multiply:['$product.price','$quantity']},
                    discount: 1,
                    offer_price:{$subtract:[{$multiply:['$product.price','$quantity']},{$divide:[{$multiply:[{$multiply:['$product.price','$quantity']},"$discount"]},100]}]},
                    product_name: "$product.name",
                    currency:"$product.currency",
                    image_url: 1,
                    product_size: "$product.size",
                    description: 1,
                    quantity: 1
                }
            }
        ]);

        return {
            status: 200,
            message: "OFFERS_LISTED_SUCCESSFULLY",
            data: {
                offers
            }
        };

    } catch (error) {

        throw error;

    }
};

export { create, getAll };