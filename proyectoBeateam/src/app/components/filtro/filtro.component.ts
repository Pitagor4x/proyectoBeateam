import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  @Output() filtroEnviado: EventEmitter<[] | any>
  @Output() paginaReset: EventEmitter<number | any>

  filtroForm: FormGroup;
  estados: any = [];
  tipos: any = [];
  estadosEnviados: any = [];
  fecha: any = {};

  constructor(
    private peticionesService: PeticionesService,
  ) {

    this.filtroEnviado = new EventEmitter<any>()
    this.paginaReset = new EventEmitter<number | any>()

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

  onChange(estado: string, isChecked: any) {
    if (isChecked.target.checked) {
      this.estadosEnviados.push(estado);
    } else {
      let index = this.estadosEnviados.indexOf(estado);
      this.estadosEnviados.splice(index, 1);
    }
  }

  async getSearch() {
    let clienteValue = this.filtroForm.value.cliente;
    let referenciaValue = this.filtroForm.value.referencia;
    let usuarioValue = this.filtroForm.value.usuario;
    let fechaValueInicio = this.filtroForm.value.inicio;
    let fechaValueFin = this.filtroForm.value.fin;
    let tipoValue = this.filtroForm.value.tipo;
    let estadoValue = this.estadosEnviados;

    if (this.filtroForm.value.cliente === null) {
      clienteValue = ""
    } else {
      clienteValue = this.filtroForm.value.cliente
    }
    if (this.filtroForm.value.referencia === null) {
      referenciaValue = ""
    } else {
      referenciaValue = this.filtroForm.value.referencia
    }
    if (this.filtroForm.value.usuario === null) {
      usuarioValue = ""
    } else {
      usuarioValue = this.filtroForm.value.usuario
    }
    if (this.filtroForm.value.inicio === null) {
      fechaValueInicio = ""
    } else {
      fechaValueInicio = this.filtroForm.value.inicio
    }
    if (this.filtroForm.value.fin === null) {
      fechaValueFin = ""
    } else {
      fechaValueFin = this.filtroForm.value.fin
    }
    if (this.filtroForm.value.tipo === null) {
      tipoValue = ""
    } else {
      tipoValue = this.filtroForm.value.tipo
    }
    if (this.estadosEnviados.length === 0) {
      estadoValue = []
    } else {
      this.estadosEnviados = estadoValue
    }


    let params = new HttpParams()
      .set('cliente', clienteValue)
      .set('referencia', referenciaValue)
      .set('usuario', usuarioValue)
      .set('fecha[inicio]', fechaValueInicio)
      .set('fecha[fin]', fechaValueFin)
      .set('tipo', tipoValue)
    this.estadosEnviados.forEach((estado: any) => {
      params = params.append('estado[]', estado)
    });

    let tareasFiltro = await this.peticionesService.getTareas(params)
    this.filtroEnviado.emit(tareasFiltro.data)
    this.paginaReset.emit(1)
  }

  resetCampo(campo: string) {
    switch (campo) {
      case 'cliente':
        this.filtroForm.patchValue({ cliente: '' });
        break;
      case 'referencia':
        this.filtroForm.patchValue({ referencia: '' });
        break;
      case 'usuario':
        this.filtroForm.patchValue({ usuario: '' });
        break;
      case 'inicio':
        this.filtroForm.patchValue({ inicio: '', fin: '' });
        break;
      case 'tipo':
        this.filtroForm.patchValue({ tipo: '' });
        break;
      default:
        break;
    }
  }

}


