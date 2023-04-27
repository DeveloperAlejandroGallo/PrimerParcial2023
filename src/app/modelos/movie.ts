import { Generos } from "./generos";

export class Movie {
  id: number;
  name: string;
  genre: Generos;
  releaseDate: Date;
  publicQuantity: number;
  image: string;

  /**
   *
   */
  constructor(id: number, name: string, genre: Generos, releaseDate: Date, publicQuantity: number,image: string) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.publicQuantity = publicQuantity;
    this.image = image;

  }

}
