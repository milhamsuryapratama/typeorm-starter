import { UserController } from "./controller/UserController";
import { KelasController } from "./controller/KelasController";
export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },
  {
    method: "get",
    route: "/kelas",
    controller: KelasController,
    action: "all",
  },
  {
    method: "post",
    route: "/kelas",
    controller: KelasController,
    action: "save",
  },
  {
    method: "get",
    route: "/kelas/:id",
    controller: KelasController,
    action: "one",
  },
  {
    method: "put",
    route: "/kelas/:id",
    controller: KelasController,
    action: "update",
  },
];
