import { Injectable } from '@angular/core';
import { transferInterface, transferWithDate } from '../utils/interface';
import { Transfer } from '../models/transferencia.model'

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  transferHistoric: transferWithDate[]

  constructor() {
    this.transferHistoric = []
  }

  get transferList() {
    return this.transferHistoric
  }

  transferAdd($event: transferInterface) {
    const uniqTransfer = { ...$event, data: new Date() }
    this.transferHistoric.push(uniqTransfer)
  }

}
