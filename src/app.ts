import { Application, Router } from './dependencies/index.ts';
import { userRoute } from './routes/index.ts';

const router = new Router();
const app = new Application();

// router.get('*', ({ response }: { response: any }) => {
//   response.body = {
//     succcess: false,
//     status: 404,
//     message: 'resource not found on this server'
//   }
// });

// middlewares to handle all requests
app.use(userRoute.routes());
app.use(router.allowedMethods());



export default app;
