import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';

@Component({
  selector: 'app-pelicula-borrar',
  templateUrl: './pelicula-borrar.component.html',
  styleUrls: ['./pelicula-borrar.component.css']
})
export class PeliculaBorrarComponent {


  @Input() borrar_peliSeleccionadaInput?: Pelicula;
  @Output() borrar_peliSeleccionadaOutput: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();


  borrarPelicula() {
    this.borrar_peliSeleccionadaOutput.emit(this.borrar_peliSeleccionadaInput);
    }
}
