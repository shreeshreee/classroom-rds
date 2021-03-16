import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galletas',
  templateUrl: './galletas.component.html',
  styleUrls: ['./galletas.component.scss']
})
export class GalletasComponent implements OnInit {
  dismissible = true;
  alert: any = {
    type: 'warning',
    msg: `<div>
    <h2>
    <strong>Receta</strong>
    </h2>
    Consulta aquí los ingredientes y el resumen de la preparación del Pan de Sal.
    </div>`
  };
  constructor() { }

  ngOnInit(): void {
  }

}
