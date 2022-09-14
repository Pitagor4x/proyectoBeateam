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

  constructor() {
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

  ngOnInit(): void {
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
    let params = "?cliente=" + cliente + "?referencia=" + referencia + "?usuario=" + usuario + "?inicio=" + inicio + "?fin=" + fin + "?tipo=" + tipo + "?estado=" + estado

    console.log(params)

  }
}
