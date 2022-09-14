import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { VistaTareasComponent } from './components/vista-tareas/vista-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltroComponent,
    VistaTareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
