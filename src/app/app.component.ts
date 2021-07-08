import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';
import { transferInterface } from './utils/interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-project'

  constructor(private transferService: TransferenciaService) { }

  transfer($event: transferInterface) {
    this.transferService.transferAdd($event)
  }

}
