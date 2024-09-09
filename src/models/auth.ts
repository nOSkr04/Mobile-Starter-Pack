import { IAuth } from "../interfaces/auth";
import { IUser } from "../interfaces/user";

export class Auth implements IAuth {
  token: string | null;
  user: IUser | null;
  payment: boolean | null;

  constructor({
    token,
    user,
    payment
  }: IAuth) {
    this.token = token;
    this.user = user;
    this.payment = payment;
  }
}
