import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyectoBeateam';

  tareasFiltradas: any
  pagina: any

  filtroGuardado($event: any) {
    this.tareasFiltradas = $event
  }

  paginaStart($event: any) {
    this.pagina = $event
  }

}