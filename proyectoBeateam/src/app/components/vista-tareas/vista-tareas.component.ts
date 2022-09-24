import { Component, Input, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-vista-tareas',
  templateUrl: './vista-tareas.component.html',
  styleUrls: ['./vista-tareas.component.css']
})
export class VistaTareasComponent implements OnInit {

  @Input() actualizarVista: any
  @Input() paginaReset: any

  tareas: any
  busqueda: any
  tareasFiltradas: any
  page_size: number = 0
  page_number: number = 0
  pages_array: number[] = []
  pagesNumber: number = 0

  constructor(
    private peticionesService: PeticionesService,
  ) {
    this.page_size = 27
    this.page_number = 1
  }

  async ngOnInit(): Promise<any> {
    this.tareas = await this.peticionesService.getTareas()
    this.tareas = this.tareas.data
    this.page_number = 1
    this.pagesNumber = this.tareas?.length / this.page_size

    for (let i = 1; i <= Math.ceil(this.pagesNumber); i++) {
      this.pages_array.push(i)
    }
  }

  ngOnChanges() {
    this.tareas = this.actualizarVista
    this.pagesNumber = this.tareas?.length / this.page_size
    this.pages_array = []
    for (let i = 1; i <= Math.ceil(this.pagesNumber); i++) {
      this.pages_array.push(i)
    }
    this.page_number = this.paginaReset
  }

  cambiarPagina($event: any) {
    this.page_number = Number($event.target.firstChild.data)
  }

  paginaAnterior() {
    if (this.page_number > 1) {
      this.page_number--
    }
  }
  paginaSiguiente() {
    if (this.page_number < this.pages_array.length) {
      this.page_number++
    }
  }




}
