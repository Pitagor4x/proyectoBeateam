import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import * as dayjs from 'dayjs';
import * as CryptoJS from 'crypto-js';
import { lastValueFrom, Observable } from 'rxjs';


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

  getTipos(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'funcion': 'getTipos',
        'X-Auth': this.tokenEncriptado
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl, httpOptions))
  }

  getEstados(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'funcion': 'getEstados',
        'X-Auth': this.tokenEncriptado
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl, httpOptions))
  }

  getTareas(filter: any = ""): Promise<any> {
    const httpOptions = {
      params: filter,
      headers: new HttpHeaders({
        'funcion': 'getTareas',
        'X-Auth': this.tokenEncriptado
      }),

    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl, httpOptions))
  }


}
