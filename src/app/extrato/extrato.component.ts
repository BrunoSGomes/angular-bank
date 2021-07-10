import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { transferInterface } from '../utils/interface';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferHistoric: Array<transferInterface>

  constructor(private transferService: TransferenciaService) {
    this.transferHistoric = []
  }

  ngOnInit(): void {
    this.transferService.transferList().subscribe((result: Array<transferInterface>) => {
      this.transferHistoric = result
    })
  }
}
