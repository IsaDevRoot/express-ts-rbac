import {Router, Request, Response, NextFunction} from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/organization/1/organization1.validation';
import service from '@/resources/organization/1/organization1.service';
import response from '@/helpers/response.helper';

class Organization1Controller implements Controller {
    public path = '/organizations/1';
    public router = Router();

    constructor() {
        // this.service = 
        this.initializeRoute();
    }

    private initializeRoute():void {
        // get all
        this.router.get(
            `${this.path}`,
            validationMiddleware(validate.query, 'query'),
            this.index
        );

        this.router.post(
            `${this.path}`, 
            validationMiddleware(validate.body, 'body'), 
            this.create
        );

        this.router.patch(
            `${this.path}/:uuid`, 
            validationMiddleware(validate.params, 'params'), 
            validationMiddleware(validate.body, 'body'), 
            this.update
        );
        
        this.router.delete(
            `${this.path}/:uuid`, 
            validationMiddleware(validate.params, 'params'),
            this.delete
        );
    }

    private async index(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const {name, sname, status} = req.query;
            
            const datas = await service.index({
                name: name ? String(name) : undefined, 
                sname: sname ? String(sname) : undefined, 
                status: String(status)
            });

            return response.ok(datas, res);
        } catch (e: any) {
            console.error(e);
            next(new HttpException(500, e.message));
        }
    } 
    
    private async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const {name, sname} = req.body;
            await service.create(name, sname);

            return response.created({}, res);
        } catch (e: any) {
            console.error(e);
            next(new HttpException(500, e.message));
        }
    }
    
    private async update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const {uuid} = req.params;
            const {name, sname} = req.body;
           if ((await service.update(uuid, name, sname))) {
               return response.ok({uuid}, res);
           }
           return response.notFound({uuid}, res);
        } catch (e: any) {
            console.error(e);
            next(new HttpException(500, e.message));
        }
    }
    
    private async delete(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const {uuid} = req.params;
            if((await service.delete(uuid))) {
                return response.ok({uuid}, res);
            }
            return response.notFound({uuid}, res);
        } catch (e: any) {
            console.error(e);
            next(new HttpException(500, e.message));
        }
    }
}

export default Organization1Controller;