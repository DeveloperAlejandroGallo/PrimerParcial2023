import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../modelos/pelicula';
import { Generos } from '../modelos/generos';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  /**
   *
   */
  constructor(private pelis: PeliculasService) {

  }

  listadoPeliculas = Array<Pelicula>();
  peliculaSeleccionada?: Pelicula;

  ngOnInit(): void {
    this.listadoPeliculas = this.pelis.getPersonas();
  }

  recibirPelicula(peli: Pelicula) {
      this.peliculaSeleccionada = peli;

    }

  borrarPelicula(peli: Pelicula){
    this.listadoPeliculas = this.listadoPeliculas.filter((p) => p.id !== peli.id);

  }
}
