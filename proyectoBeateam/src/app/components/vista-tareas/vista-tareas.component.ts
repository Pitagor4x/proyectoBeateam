import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-vista-tareas',
  templateUrl: './vista-tareas.component.html',
  styleUrls: ['./vista-tareas.component.css']
})
export class VistaTareasComponent implements OnInit {

  tareas: any
  busqueda: any


  constructor(
    private peticionesService: PeticionesService
  ) { }

  async ngOnInit(): Promise<void> {
    this.tareas = await this.peticionesService.getTareas()
    this.tareas = this.tareas.data
    console.log(this.tareas)

  }

}
