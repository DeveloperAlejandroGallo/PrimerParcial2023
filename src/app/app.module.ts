import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
// Peticiones Http
import { HttpClientModule } from '@angular/common/http'

//Material
//Tablas
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

//Formularios
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; //para el datepicker
import { MatCardModule } from '@angular/material/card'
// para poder trabajar con los formatos de fechas =>
// npm install moment --save
// npm i @angular/material-moment-adapter@14.2.7
import { MomentDateModule } from '@angular/material-moment-adapter';

//Alertas
import { MatSnackBarModule } from '@angular/material/snack-bar';

//Iconos
import { MatIconModule }  from '@angular/material/icon';
//Modales
import { MatDialogModule }  from '@angular/material/dialog';
//Grillas
import { MatGridListModule }  from '@angular/material/grid-list';

import {  }  from '@angular/material/';

// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';
import { NavVarComponent } from './nav-var/nav-var.component';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth-service.service';



import { PeliculaAltaComponent } from './peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './peliculas/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './actores/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actores/actor-listado/actor-listado.component';
import { PeliculaTablaComponent } from './peliculas/pelicula-tabla/pelicula-tabla.component';
import { PeliculaDetalleComponent } from './peliculas/pelicula-detalle/pelicula-detalle.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaBorrarComponent } from './peliculas/pelicula-borrar/pelicula-borrar.component';
import { PeliculaModificarComponent } from './peliculas/pelicula-modificar/pelicula-modificar.component';
import { HighligthDirective } from './directivas/highligth.directive';
import { ToastMsgService } from './services/toast-msg.service';
import { PeliculasService } from './services/peliculas.service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    NavVarComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaTablaComponent,
    PeliculaDetalleComponent,
    BusquedaComponent,
    PeliculaBorrarComponent,
    PeliculaModificarComponent,
    HighligthDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, ToastMsgService, PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
