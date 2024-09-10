import { User } from "../models/user";
import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const me = async () => {
  const res = await httpRequest.get("/users/me");
  return User.fromJson(res.data);
};

export const login = async (data:{username: string, password: string}) => {
  const res = await httpRequest.post("/users/login",data);
  return res;
};

export const logout = async() => {
  const res = await httpRequest.get("/users/logout");
  return res;
};
