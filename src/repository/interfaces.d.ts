export interface IUser {
  id: number,
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  token?: string;
  password?: string;
}

export interface IUserRepository {
  getAllUsers: () => IUser[];
  getSingleUser: (id: number) => IUser | undefined;
  registerUser: (user: IUser) => IUser;
  loginUser: (user: IUser) => IUser | undefined;
  updateUserDetails: ({ id, value }: { id: number, value: IUser }) => IUser | undefined;
  deleteUser: (id: number) => IUser[] | [] | undefined;
}


// id: number;
//     value: IUser