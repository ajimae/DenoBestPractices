export interface IUser {
  id: number,
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  token?: string;
  password?: string;
}

export interface IUserResponse {
  success: boolean,
  status: number,
  message: string,
  data?: IUser[] | IUser | [] | any
}

export interface IUserController {
  getAllUsers: ({ response }: { response: any }) => Promise<IUserResponse>;
  getSingleUser: ({ response, params }: { response: any, params: any }) => Promise<IUserResponse>;
  registerUser: ({ request, response }: { request: any, response: any }) => Promise<IUserResponse>;
  updateUserDetails: ({ params, request, response }: { params: any, request: any, response: any }) => Promise<IUserResponse | undefined>;
  loginUser: ({ request, response }: { request: any, response: any }) => Promise<IUserResponse>;
}
