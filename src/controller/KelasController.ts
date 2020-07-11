import { getRepository } from "typeorm";
import { Kelas } from "../entity/Kelas";
import { NextFunction, Request, Response } from "express";

export class KelasController {
  private kelasRepository = getRepository(Kelas);

  async all(request: Request, response: Response, next: NextFunction) {
    return await this.kelasRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return await this.kelasRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return await this.kelasRepository.save(request.body);
  }
  }
}
