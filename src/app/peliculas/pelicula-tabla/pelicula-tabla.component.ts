import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';

@Component({
  selector: 'app-pelicula-tabla',
  templateUrl: './pelicula-tabla.component.html',
  styleUrls: ['./pelicula-tabla.component.css']
})
export class PeliculaTablaComponent {


  @Input() peliculaListaInput: Array<Pelicula> = new Array<Pelicula>();
  @Output() peliSeleccionadaOutput: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();


  seleccionarPeli(peli: Pelicula){
    this.peliSeleccionadaOutput.emit(peli);
  }


}
