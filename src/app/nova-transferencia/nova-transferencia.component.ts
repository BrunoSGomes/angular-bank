import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { transferInterface } from '../utils/interface'

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent implements OnInit {
  @Output() onTransfer = new EventEmitter<transferInterface>()

  valor!: number
  destino!: number

  constructor() { }

  ngOnInit(): void { }

  transfer() {
    const valorEmitir: transferInterface = {
      valor: this.valor,
      destino: this.destino
    }
    this.onTransfer.emit(valorEmitir)
    this.clearInput()
  }

  clearInput() {
    this.valor = 0
    this.destino = 0
  }
}