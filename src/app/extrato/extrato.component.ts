import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { transferWithDate } from '../utils/interface';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferHistoric!: Array<transferWithDate>

  constructor(private transferService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferHistoric = this.transferService.transferList
  }
}
