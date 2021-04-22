import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudantesComponent } from './componentes/estudantes/estudantes.component';
import { MedioComponent } from './componentes/medio/medio.component';


@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    MedioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
