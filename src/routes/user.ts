// @ts-nocheck
import { IUserRepository } from '../repository/interfaces.d.ts';
import { IUserController } from '../controllers/interfaces.d.ts';
import { db } from '../db/db.ts';
import { UserRepository } from '../repository/UserRepository.ts';
import { Router } from '../dependencies/index.ts';
import { UserController } from '../controllers/index.ts';

const router = new Router();

// inject dependencies
const userRepository: IUserRepository = new UserRepository(db);
const userController: IUserController = new UserController(userRepository);

router.post('/login', userController.loginUser.bind(userController));
router.get('/users', userController.getAllUsers.bind(userController));
router.post('/register', userController.registerUser.bind(userController));
router.get('/user/:id', userController.getSingleUser.bind(userController));
router.patch('/user/:id', userController.updateUserDetails.bind(userController));
router.delete('/user/:id', userController.deleteUser.bind(userController));

export { router as userRoute };
