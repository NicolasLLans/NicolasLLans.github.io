import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarranavComponent } from './componentes/barranav/barranav.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { PanelComponent } from './componentes/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BarranavComponent,
    ProyectosComponent,
    AcercaDeComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
