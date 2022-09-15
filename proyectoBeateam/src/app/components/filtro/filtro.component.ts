import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  filtroForm: FormGroup;
  estados: [] | any;
  tipos: [] | any

  constructor(
    private peticionesService: PeticionesService
  ) {
    this.filtroForm = new FormGroup({
      cliente: new FormControl(),
      referencia: new FormControl(),
      usuario: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      tipo: new FormControl(),
      estado: new FormControl()
    }, [])
  }

  async ngOnInit(): Promise<void> {
    this.estados = await this.peticionesService.getEstados()
    this.estados = this.estados.data
    this.tipos = await this.peticionesService.getTipos()
    this.tipos = this.tipos.data
  }

  getSearch() {
    let cliente = this.filtroForm.value.cliente;
    let referencia = this.filtroForm.value.referencia;
    let usuario = this.filtroForm.value.usuario;
    let inicio = this.filtroForm.value.inicio;
    let fin = this.filtroForm.value.fin;
    let tipo = this.filtroForm.value.tipo;
    let estado = this.filtroForm.value.estado;
    console.log(this.filtroForm.value)
    let params = ""
    if (cliente != null) {
      params += "?cliente=" + cliente
    }
    if (referencia != null) {
      params += "?referencia=" + referencia
    }
    if (usuario != null) {
      params += "?usuario=" + usuario
    }
    if (inicio != null) {
      params += "?inicio=" + inicio
    }
    if (fin != null) {
      params += "?fin=" + fin
    }
    if (tipo != null) {
      params += "?tipo=" + tipo
    }
    if (estado != null) {
      params += "?estado=" + estado
    }

    this.peticionesService.getBusqueda(params)

  }
}
