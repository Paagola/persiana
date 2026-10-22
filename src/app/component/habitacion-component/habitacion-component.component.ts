import { Component, input, output } from '@angular/core';
import { PersianaComponentComponent } from './persiana-component/persiana-component.component';

@Component({
  selector: 'app-habitacion-component',
  imports: [PersianaComponentComponent],
  templateUrl: './habitacion-component.component.html',
  styleUrl: './habitacion-component.component.css'
})
export class HabitacionComponentComponent {

  corrienteGeneral = input<boolean>(false);
  corrienteHabitacion = input<boolean>(false);

  estadoPersiana = output<string>();
  
  hayCorriente(): boolean { // hay corriente solo si hay general Y de habitación
    return this.corrienteGeneral() && this.corrienteHabitacion();
  }

  onEstadoPersiana(estado: string) {
    this.estadoPersiana.emit(estado);
  }
}
