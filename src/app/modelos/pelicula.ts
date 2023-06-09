import { Generos } from "./generos";

export class Pelicula {
  id: number;
  Titulo: string;
  Genero: Generos;
  fechaEstreno: Date;
  cantidadPublico: number;
  fotoPelicula: string;

  /**
   *
   */
  constructor(
    id: number,
    nombre: string,
    genero: Generos,
    fechaEstreno: Date,
    cantidadPublico: number,
    fotoPelicula: string) {

      this.id = id;
      this.Titulo = nombre;
      this.Genero = genero;
      this.fechaEstreno = fechaEstreno;
      this.cantidadPublico = cantidadPublico;
      this.fotoPelicula = fotoPelicula;

  }
}
