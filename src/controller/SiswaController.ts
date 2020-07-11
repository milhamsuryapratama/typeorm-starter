import { getRepository } from "typeorm";
import { Siswa } from "../entity/Siswa";
import { NextFunction, Request, Response } from "express";

export class SiswaController {
  private siswaRepository = getRepository(Siswa);

  async all(request: Request, response: Response, next: NextFunction) {
    return await this.siswaRepository.find({ relations: ["kelas"] });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return await this.siswaRepository.save(request.body);
  }
}
