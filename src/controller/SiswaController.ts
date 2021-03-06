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

  async one(request: Request, response: Response, next: NextFunction) {
    return await this.siswaRepository.findOne(
      {
        nis: request.params.nis,
      },
      {
        relations: ["kelas"],
      }
    );
  }

  async update(request: Request, response: Response, next: NextFunction) {
    return await this.siswaRepository.update(request.params.nis, request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let siswaToRemove: Siswa = await this.siswaRepository.findOne(
      request.params.nis
    );
    return await this.siswaRepository.remove(siswaToRemove);
  }
}
