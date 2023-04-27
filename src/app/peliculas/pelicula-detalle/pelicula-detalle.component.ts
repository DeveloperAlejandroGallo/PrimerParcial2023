import { Component, Input } from '@angular/core';
import { Generos } from 'src/app/modelos/generos';
import { Pelicula } from 'src/app/modelos/pelicula';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent {

  @Input() detalle_peliSeleccionadaInput?: Pelicula;

  getGenero(genero: Generos){
    return Generos[genero];
  }

}
