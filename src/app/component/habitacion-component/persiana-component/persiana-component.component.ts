import { Component, input } from '@angular/core';

@Component({
  selector: 'app-persiana-component',
  imports: [],
  templateUrl: './persiana-component.component.html',
  styleUrl: './persiana-component.component.css'
})
export class PersianaComponentComponent {

  corriente = input<boolean>;

  persiana = 1;

  estadoPersiana = false;

  onBajarSubir(event: Event) {
    this.estadoPersiana = !this.estadoPersiana;

    console.log(this.estadoPersiana);
  }




}
