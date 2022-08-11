import {Request, Response, NextFunction} from 'express';
import HttpException from '@/utils/exceptions/http.exception';
import response from '@/helpers/response.helper';

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction): void | Response {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong!';

    return response.error(message, res);
}

export default errorMiddleware;