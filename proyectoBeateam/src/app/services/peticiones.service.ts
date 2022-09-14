import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as dayjs from 'dayjs';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  baseUrl: string = 'https://www.azurglobal.es/apiPracticas/';
  fecha: string = dayjs().format('YYYYMMDD');
  token = 'BOERUINB' + this.fecha;
  tokenEncriptado: string = CryptoJS.SHA384(this.token).toString();

}
