import { get, post } from "../utils/api.js";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login({email, password}) {
  const user = await post(endpoints.login, { email, password });
  
  sessionStorage.setItem("user", JSON.stringify(user));
  return user
}

export async function register({email, password, username}) {
  const user = await post(endpoints.register, { email, password, username });
  sessionStorage.setItem("user", JSON.stringify(user));
}

export async function logout() {
  get(endpoints.logout);
  sessionStorage.removeItem("user");
}