import {Request, Response, NextFunction, RequestHandler} from 'express';
import response from '@/helpers/response.helper';
import Joi from 'joi';

function validationMiddleware(schema: Joi.Schema, type: string): RequestHandler {
    return async(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void|Response> => {
        const validtionOption = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true
        };

        try {
            if (type == 'body') {
                const value = await schema.validateAsync(req.body, validtionOption);
                req.body = value;
            } else if (type == 'params') {
                const value = await schema.validateAsync(req.params, validtionOption);
                req.params = value;
            } else if (type == 'query') {
                const value = await schema.validateAsync(req.query, validtionOption);
                req.query = value;
            }
            next();
        } catch (e: any) {
            const errors: string[] = [];
            e.details.forEach((detail: Joi.ValidationErrorItem) => {
                errors.push(detail.message);
            });
            return response.bad(errors, res);
        }
    };
}

export default validationMiddleware;
