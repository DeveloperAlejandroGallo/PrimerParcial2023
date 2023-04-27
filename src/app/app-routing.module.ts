import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaAltaComponent } from './peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './peliculas/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './actores/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actores/actor-listado/actor-listado.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'bienvenido' },
  { path: 'bienvenido',component: HomeComponent },
  { path: 'error',component: ErrorComponent },
  { path: 'busqueda', component: BusquedaComponent},
  { path: 'peliculas/alta', component: PeliculaAltaComponent},
  { path: 'peliculas/listado', component: PeliculaListadoComponent},
  { path: 'actor/alta', component: ActorAltaComponent},
  { path: 'actor/listado', component: ActorListadoComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
