import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';
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

  constructor(
    private transferService: TransferenciaService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  transfer() {
    const valueToPost: transferInterface = {
      valor: this.valor,
      destino: this.destino
    }
    this.transferService.transferAdd(valueToPost).subscribe((result) => {
      this.clearInput()
      this.router.navigateByUrl('extrato')
    }, (error) => {
      console.log(error)
    })
  }

  clearInput() {
    this.valor = 0
    this.destino = 0
  }
}