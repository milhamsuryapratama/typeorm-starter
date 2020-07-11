import { PrimaryColumn, Column, OneToOne, JoinColumn, Entity } from "typeorm";
import { type } from "os";
import { Kelas } from "./Kelas";

enum JK {
  "L",
  "P",
}

@Entity()
export class Siswa {
  @PrimaryColumn()
  nis: number;

  @Column()
  nama: string;

  @Column()
  alamat: string;

  @Column()
  jk: JK;

  @OneToOne((type) => Kelas)
  @JoinColumn()
  kelas: Kelas;
}
