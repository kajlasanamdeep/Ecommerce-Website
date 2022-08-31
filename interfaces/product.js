import joi from 'joi'
import constants from '../constants';

const createSchema = {
    body: joi.object({
        name: joi.string().uppercase().trim().required(),
        price:joi.number().required(),
        currency:joi.string().trim().valid(...constants.currency).optional(),
        size: joi.string().trim().uppercase().valid(...constants.sizes).required(),
        category: joi.string().trim().hex().length(24).required(),
        description: joi.string().trim().uppercase().optional(),
    })
};

export {createSchema};