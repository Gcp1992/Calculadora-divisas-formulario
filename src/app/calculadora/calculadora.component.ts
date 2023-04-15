import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1:string="0";
  num2:string="0";
  resultado:number=0;

  //void--> No devuelve nada
  sumar():void{
    //ParseInt para no concatenar
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }

  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
  }

  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2);
  }

  dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }
}
