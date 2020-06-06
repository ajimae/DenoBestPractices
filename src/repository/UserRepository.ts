import { IUser, IUserRepository } from './interfaces.d.ts';

export class UserRepository implements IUserRepository {

  private Users: any;

  constructor(users: any) {
    this.Users = users;
  }

  getAllUsers(): IUser[] {
    const users = this.Users.map((_user: IUser) => {
      const { password, ...user } = _user;

      return user;
    });

    return users;
  }

  getSingleUser(id: number): IUser | undefined {
    let _user;
    for (const user of this.Users) {
      if (user.id == id) {
        const { password, ...withoutPassword } = user;
        _user = withoutPassword;
      }
    }

    return _user;
  }

  registerUser(user: IUser): IUser {
    this.Users.push(user);

    return user;
  }

  loginUser(user: IUser): IUser | undefined {
    const { email, password }: { email: string; password?: string } = user;
    let _user;
    for (const user of this.Users)
      if (user.email == email && user.password == password)
        _user = user;

    const { password: _pass, ...userDetails } = _user;
    return userDetails;
  }

  updateUserDetails({ id, value }: { id: number; value: IUser }): IUser | undefined {
    let updatedUserDetails;
    for (let i = 0; i < this.Users.length; i++) {
      if (this.Users[i].id == id) {
        const updatedDetails = { ...this.Users[i], ...value };
        this.Users[i] = updatedDetails;

        updatedUserDetails = this.Users[i];
        break;
      }
    }

    return updatedUserDetails;
  }

  deleteUser(id: number): IUser[] | [] | undefined {
    const users = this.Users.filter((user: IUser) => user.id != id);

    this.Users = users;

    return this.Users;
  }
}
