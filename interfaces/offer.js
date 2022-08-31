import joi from 'joi'
import constants from '../constants';

const createSchema = {
    body: joi.object({
        title: joi.string().uppercase().trim().required(),
        discount:joi.number().required(),
        quantity:joi.number().optional(),
        product: joi.string().trim().hex().length(24).required(),
        description: joi.string().trim().uppercase().optional(),
    })
};

export {createSchema};