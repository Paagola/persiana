import { Component, input } from '@angular/core';
import { PersianaComponentComponent } from './persiana-component/persiana-component.component';

@Component({
  selector: 'app-habitacion-component',
  imports: [PersianaComponentComponent],
  templateUrl: './habitacion-component.component.html',
  styleUrl: './habitacion-component.component.css'
})
export class HabitacionComponentComponent {

  corriente = input<boolean>

  

}
