import express, {Application} from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import Controller from '@/utils/interfaces/controller.interface';
import ErrorMiddleware from '@/middleware/error.middleware';

class App {
    private express:Application;
    private port:number;
    private basePath = '/api/v1';

    constructor(controllers: Controller[], port:number) {
        this.express = express();
        this.port = port;

        // this.initializeDatabaseConnection();
        this.initializeMiddleware();
        this.intializeControllers(controllers);
        this.initializeErrorHandling();
    }

    // private initializeDatabaseConnection():void {
    //     config.credential
    // }
    
    private initializeMiddleware():void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(compression());
    }

    private intializeControllers(controllers:Controller[]):void {
        controllers.forEach((controller:Controller) => {
            console.log(`${this.basePath}${controller.path}`);
            this.express.use(this.basePath, controller.router);
        });
    }

    private initializeErrorHandling():void {
        this.express.use(ErrorMiddleware);
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
    }
}

export default App;