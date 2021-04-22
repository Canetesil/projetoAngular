import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudantesComponent } from './componentes/estudantes/estudantes.component';
import{MedioComponent}from'./componentes/medio/medio.component';

const routes: Routes = [

  { path: 'estudante', component: EstudantesComponent},
  { path: 'medio',component: MedioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
