import Main from "../components/Main/Main";
import User from "../components/User/User";

export const routes = [
  { path: "/", component: Main, exact: true },
  { path: "/user/:id", component: User, exact: true },
  //   { path: "/users/:id", component: PostIdPage, exact: true },
];
