import Joi from 'joi';

const body = Joi.object({
    name: Joi.string().min(3).required(),
    sname: Joi.string().min(3).required(),
});

const query = Joi.object({
    name: Joi.string(),
    sname: Joi.string(),
    status: Joi.string().allow('A', 'D', 'P').required()
});

const params = Joi.object({
    uuid: Joi.string().min(36).required()
});

export default {body, query, params};