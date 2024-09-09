import { ScopedMutator } from "swr/_internal";
import { IUser } from "../interfaces/user";


export class User implements IUser {
  _id: string;
  username: string;
  isPayment: boolean;
  isAdult: boolean;
  notificationCount: number;
  role: string;
  expoPushToken: string;
  isComplete: boolean;

  constructor({
    _id,
    username,
    isPayment,
    role,
    notificationCount,
    expoPushToken,
    isAdult,
    isComplete
  }: IUser) {
    this._id = _id;
    this.username = username;
    this.isPayment = isPayment;
    this.role = role;
    this.notificationCount = notificationCount;
    this.expoPushToken = expoPushToken;
    this.isAdult = isAdult;
    this.isComplete = isComplete;
  }

  paymentSuccess(mutate:ScopedMutator){
    this.isPayment = true;
    mutate("swr.user.me", User.fromJson(this), { revalidate: false });
    return this;
  }

  static fromJson(json: IUser) {
    return new User(json);
  }
}
