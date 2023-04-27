import { Component, Input } from '@angular/core';
import { Generos } from 'src/app/modelos/generos';
import { Pelicula } from 'src/app/modelos/pelicula';

@Component({
  selector: 'app-pelicula-modificar',
  templateUrl: './pelicula-modificar.component.html',
  styleUrls: ['./pelicula-modificar.component.css']
})
export class PeliculaModificarComponent {

  @Input() modificar_peliSeleccionadaInput?: Pelicula;


  getGenero(genero: Generos){
    return Generos[genero];
  }
}
