import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-persiana-component',
  imports: [],
  templateUrl: './persiana-component.component.html',
  styleUrl: './persiana-component.component.css'
})
export class PersianaComponentComponent {

  corriente = input<boolean>(false); // property binding
  estadoCambiado = output<string>(); // event binding

  abierta = false; // estado interno propio

  get estado(): string {
    return this.abierta ? 'ABIERTA' : 'CERRADA';
  }
  


  onSubirBajar() {
    this.abierta = !this.abierta;
    this.estadoCambiado.emit(this.estado); // se lo envia al padre 
  }




}
