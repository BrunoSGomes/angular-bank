import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { transferInterface } from '../utils/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  transferHistoric: transferInterface[]
  url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.transferHistoric = []
  }

  transferList(): Observable<Array<transferInterface>> {
    return this.httpClient.get<Array<transferInterface>>(this.url)
  }

  transferAdd(transfer: transferInterface): Observable<transferInterface> {
    const uniqTransfer = { ...transfer, data: new Date() }
    return this.httpClient.post<transferInterface>(this.url, uniqTransfer)
  }

}
