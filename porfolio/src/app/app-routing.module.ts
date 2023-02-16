import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

const routes: Routes = [
  {path: '', component:ProyectosComponent},
  {path: 'sobre-mi', component:AcercaDeComponent},
  {path: 'Proyectos', component:ProyectosComponent},
  {path: '**', component:ProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
