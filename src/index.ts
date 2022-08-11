import 'dotenv/config';
import 'module-alias/register';
// import validateEnv from '@/utils/validateEnv';
import App from './app';
// import PostController from '@/resources/post/post.controller';
import Organization1Controller from '@/resources/organization/1/organization1.controller';

// validateEnv();

const app = new App([
    // new PostController()
    new Organization1Controller()
], 
Number(process.env.PORT));

app.listen();