import Joi from 'joi';

const body = Joi.object({
    name: Joi.string().min(3).required(),
    sname: Joi.string().min(3).required(),
});

const query = Joi.object({
    name: Joi.string().min(0),
    sname: Joi.string().min(0),
    status: Joi.string().allow('A', 'D', 'P').required()
});

const params = Joi.object({
    uuid: Joi.string().min(36).required()
});

export default {body, query, params};