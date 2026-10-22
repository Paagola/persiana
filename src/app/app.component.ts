import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitacionComponentComponent } from './component/habitacion-component/habitacion-component.component';


@Component({
  selector: 'app-root',
  imports: [HabitacionComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Control de vivienda';

  corrienteGeneral = false;
  estadoRecibido = 'CERRADA';
  corrienteHab1 = false;

  onConectarGeneral() { 
    this.corrienteGeneral = !this.corrienteGeneral; 
  }

  onConectarHab1() { 
    this.corrienteHab1 = !this.corrienteHab1; 
  }

  onEstadoPersiana(estado: string) { 
    this.estadoRecibido = estado; 
  }


}
