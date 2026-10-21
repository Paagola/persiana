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

  corriente = false;

  onConectarDesconectar(event: Event) {
    let conectDesc = event.target as HTMLButtonElement

    this.corriente = !this.corriente // Cambia el estado de corriente al contrario.
  
    if (this.corriente) {
      conectDesc.innerText = "Desconectar"
    } else {
      conectDesc.innerText = "Conectar"
    }
  }


}
