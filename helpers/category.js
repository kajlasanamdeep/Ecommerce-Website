import categoryModel from "../models/categoryModel";

const create = async function (req) {
    try {

        let payload = req.body;
        if (req?.file) {
            payload.image_url = `/images/${req.file.filename}`;
            payload.image_path = req.file.path;
        }
        await categoryModel.create(payload);

        return {
            status: 201,
            message: "CATEGORY_CREATED_SUCCESSFULLY"
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

        let categories = await categoryModel.find({});

        return {
            status: 200,
            message: "CATEGORIES_LISTED_SUCCESSFULLY",
            data: {
                categories
            }
        };

    } catch (error) {

        throw error;

    }
};

export{create,getAll};