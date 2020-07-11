import { getRepository } from "typeorm";
import { Kelas } from "../entity/Kelas";
import { NextFunction, Request, Response } from "express";

export class KelasController {
  private kelasRepository = getRepository(Kelas);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.kelasRepository.find();
  }
}
