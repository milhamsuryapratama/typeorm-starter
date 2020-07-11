import { UserController } from "./controller/UserController";
import { KelasController } from "./controller/KelasController";
import { Siswa } from "./entity/Siswa";
import { SiswaController } from "./controller/SiswaController";
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
  {
    method: "delete",
    route: "/kelas/:id",
    controller: KelasController,
    action: "remove",
  },
  {
    method: "get",
    route: "/siswa",
    controller: SiswaController,
    action: "all",
  },
  {
    method: "post",
    route: "/siswa",
    controller: SiswaController,
    action: "save",
  },
  {
    method: "get",
    route: "/siswa/:nis",
    controller: SiswaController,
    action: "one",
  },
];
