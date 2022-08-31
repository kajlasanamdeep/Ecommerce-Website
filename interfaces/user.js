import joi from 'joi'

const registrationSchema = {
    body: joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().optional(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().lowercase(),
        phoneNumber: joi.string().min(10).max(12).required(),
        password: joi.string().min(6).required(),
    })
};

const updateSchema = {
    body: joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().optional(),
        phoneNumber: joi.string().min(10).max(12).required(),
        password: joi.string().min(6).required(),
    })
};


const loginSchema = {
    body: joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().lowercase(),
        password: joi.string().min(6).required(),
    })
};

export { registrationSchema,loginSchema,updateSchema }