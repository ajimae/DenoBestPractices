import { IUserController, IUserResponse, IUser } from './interfaces.d.ts';
import { IUserRepository } from '../repository/interfaces.d.ts';


class UserController implements IUserController {

  private UserRepository: IUserRepository;

  constructor(UserRepository: IUserRepository) {
    this.UserRepository = UserRepository;
  }

  async getAllUsers({ response }: { response: any }): Promise<IUserResponse> {
    try {
      const users = this.UserRepository.getAllUsers();
      return response.body = {
        success: true,
        status: 200,
        message: 'success',
        data: users || []
      };
    } catch (error) {
      return response.body = {
        success: false,
        status: 500,
        message: 'failed',
        data: error
      };
    }
  }

  async getSingleUser({ response, params }: { response: any, params: any }): Promise<IUserResponse> {
    try {
      const { id } = params;
      const user = this.UserRepository.getSingleUser(id);

      return response.body = {
        success: true,
        status: 200,
        message: 'success',
        data: user || []
      }
    } catch (error) {
      return response.body = {
        success: false,
        status: 500,
        message: 'failed',
        data: error
      }
    }
  }

  async registerUser({ request, response }: { request: any, response: any }): Promise<IUserResponse> {
    try {
      const { value }: { value: IUser } = await request.body();

      if (request.hasBody) {
        const user = this.UserRepository.registerUser(value);

        response.status = 201;
        return response.body = {
          success: true,
          status: 201,
          message: 'registeration successful',
          data: user
        }
      } else {
        response.status = 400;
        return response.body = {
          success: false,
          status: 400,
          message: 'request body is empty'
        }
      }
    } catch (error) {
      response.status = 500;
      return response.body = {
        success: false,
        status: 500,
        message: 'registeration failed',
        data: error
      }
    }
  }

  async loginUser({ request, response }: { request: any, response: any }): Promise<IUserResponse> {
    try {
      const { value }: { value: IUser } = await request.body();
      const user = this.UserRepository.loginUser(value);

      response.status = 200;
      return response.body = {
        success: true,
        status: 200,
        message: 'login successful',
        data: user || []
      }
    } catch (error) {
      response.status = 500;
      return response.body = {
        success: false,
        status: 500,
        message: 'login failed',
        data: error
      }
    }
  }

  async updateUserDetails({ params, request, response }: { params: any; request: any; response: any }): Promise<IUserResponse | undefined> {
    try {
      const { value }: { value: IUser } = await request.body();
      const { id }: { id: number } = params;

      const user = { id, value };

      if (request.hasBody) {
        const _user = this.UserRepository.updateUserDetails(user);
        response.status = 200;
        return response.body = {
          success: true,
          status: 200,
          message: 'update successful',
          data: _user
        }
      } else {
        response.status = 404;
        return response.body = {
          success: false,
          status: 400,
          message: 'request body is empty'
        }
      }
    } catch (error) {
      response.status = 500;
      return response.body = {
        success: false,
        status: 500,
        message: 'update failed',
        data: error
      }
    }
  }

  deleteUser({ params, response }: { params: any, response: any }): IUserResponse {
    try {
      const { id } = params;
      const user = this.UserRepository.deleteUser(id);

      response.status = 203;
      return response.body = {
        success: true,
        status: 203,
        message: 'operation successful',
        data: user || []
      }
    } catch (error) {

      response.status = 500;
      return response.body = {
        success: false,
        status: 500,
        message: 'operation failed',
        data: error
      }
    }
  }
}

export {
  UserController
}
