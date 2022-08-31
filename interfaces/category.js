import joi from 'joi'

const categorySchema = {
    body: joi.object({
        name: joi.string().trim().uppercase().required()
    })
};

export {categorySchema};