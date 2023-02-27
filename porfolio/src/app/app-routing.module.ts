import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

const routes: Routes = [
  {path: '', component:PanelComponent},
  {path: 'sobre-mi', component:AcercaDeComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'panel', component:PanelComponent},
  {path: '**', component:PanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
