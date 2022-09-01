import mongoose from "mongoose";
import categoryModel from "../models/categoryModel";
import productModel from "../models/productModel";

const create = async function (req) {
    try {

        let payload = req.body;
        let category = await categoryModel.findById(mongoose.Types.ObjectId(payload.category));
        if(!category || category.isDeleted){
            if (req?.file) {
                fs.unlinkSync(req.file.path);
            }    
            return{
                status: 404,
                message: "CATEGORY_NOT_FOUND"    
            }
        }
        if (req?.file) {
            payload.image_url = `/images/${req.file.filename}`;
            payload.image_path = req.file.path;
        }
        await productModel.create(payload);

        return {
            status: 201,
            message: "PRODUCT_CREATED_SUCCESSFULLY"
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
        let query = { isDeleted: false };
        if (payload?.category) {
            query.category = mongoose.Types.ObjectId(payload.category);
        }
        if (payload?.size) {
            query.size = payload.size;
        }
        if (payload?.price) {
            query.price = { $lte: parseInt(payload.price) };
        }

        let products = await productModel.aggregate([
            {
                $match: query
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'category',
                    foreignField: '_id',
                    as: 'category'
                }
            },
            {
                $unwind: "$category"
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    price: 1,
                    currency: 1,
                    category: "$category.name",
                    image_url: 1,
                    size: 1,
                    description: 1,
                    isAvaliable: 1
                }
            }
        ]);

        return {
            status: 200,
            message: "PRODUCTS_LISTED_SUCCESSFULLY",
            data: {
                products
            }
        };

    } catch (error) {

        throw error;

    }
};

export { create, getAll };