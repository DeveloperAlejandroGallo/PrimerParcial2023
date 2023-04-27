import { Injectable } from '@angular/core';
import { Pelicula } from '../modelos/pelicula';
import { Generos } from '../modelos/generos';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  // to do: agregar async
  getPersonas(): Array<Pelicula>{
    return [
      {id: 1, Titulo: 'Lord of The Rings', Genero: Generos.CienciaFiccion, fechaEstreno: new Date(2002,10,1), cantidadPublico: 12222, fotoPelicula: '../../../assets/LoTR.jpeg'},
      {id: 2, Titulo: 'Matrix', Genero: Generos.CienciaFiccion, fechaEstreno: new Date(2000,10,1), cantidadPublico: 55555, fotoPelicula: '../../../assets/Matrix.jpeg'},
      {id: 3, Titulo: 'Avengers', Genero: Generos.CienciaFiccion, fechaEstreno: new Date(2015,1,1), cantidadPublico: 66666, fotoPelicula: '../../../assets/avengers.jpeg'},
      {id: 4, Titulo: 'Jhon Wick', Genero: Generos.CienciaFiccion, fechaEstreno: new Date(2002,5,1), cantidadPublico: 777777, fotoPelicula: '../../../assets/jhonWick.jpeg'},
      {id: 5, Titulo: 'Dracula', Genero: Generos.CienciaFiccion, fechaEstreno: new Date(1995,10,1), cantidadPublico: 999999, fotoPelicula: '../../../assets/Dracula.jpeg'},
      {id: 6, Titulo: 'La caida del Halcon negro', Genero: Generos.CienciaFiccion, fechaEstreno: new Date(2005,11,1), cantidadPublico: 888888, fotoPelicula: '../../../assets/LCHN.jpeg'},
    ];
  }
}
