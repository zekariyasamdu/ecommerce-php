import { users } from "../data/mock.js";

export function auth(password, email) {
  const user = users.filter((usr) => {
    usr.email === email && usr.password === password;
  })[-1];
  return user;
}
