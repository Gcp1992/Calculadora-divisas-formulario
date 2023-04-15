import { Component } from '@angular/core';

@Component({
  selector: 'app-calcula-divisas',
  templateUrl: './calcula-divisas.component.html',
  styleUrls: ['./calcula-divisas.component.css']
})
export class CalculaDivisasComponent {
  cifra:number=0;
  jenJapones:number=130.06;
  libras:number=0.85;
  dolares:number=1.19;
  divisa: string="jenJapones";
  resultado:number=0;

  calcularDivisa(): void {
    switch(this.divisa){
      case 'jenJapones':
      this.resultado=this.cifra*this.jenJapones;
      break;

      case 'libras':
      this.resultado=this.cifra*this.cifra;
      break;

      case 'dolares':
      this.resultado=this.cifra*this.dolares;
      break;
      default:
      break;
    }
  }
}
