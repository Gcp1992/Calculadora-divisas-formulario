import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  email:string="";
  direccion:string="";
  telefono:string="";
  comunidad:string="Madrid";
  private _pago: string = "Efectivo";
  public get pago(): string {
    return this._pago;
  }
  public set pago(value: string) {
    this._pago = value;
  }
  aceptar:boolean=false;


}
