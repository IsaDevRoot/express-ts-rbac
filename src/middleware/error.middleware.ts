import {Request, Response, NextFunction} from 'express';
import HttpException from '@/utils/exceptions/http.exception';
import response from '@/helpers/response.helper';

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction): void | Response {
    const status = error.status;
    const message = error.message;
    console.log({status, message});

    return response.error(status, {}, res, message);

}

export default errorMiddleware;