import {Request, Response, NextFunction} from 'express';
import HttpException from '@/utils/exceptions/http.exception';
import response from '@/helpers/response.helper';

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction): void | Response {
    const status = error.status;
    const message = error.message === '' ? undefined : error.message;
    console.log({status, message});
    

    if (status === 404) {
        return response.notFound({}, res);
    }

    return response.error({}, res, message);

}

export default errorMiddleware;