import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ultimaResposta = '0';

  controle = '';

  funcaoIgual() {

    this.controle = eval(this.controle);
    
    if(this.controle == undefined) {
      this.controle = '';
    }

    this.ultimaResposta = this.controle;
  }

  funcaoCalculadora(evento) {

    evento = this.funcoesSecundarias(evento);

    if(evento == '=') {
      this.funcaoIgual();
    } else {
      this.controle = this.controle + evento;
    }
  }

  funcoesSecundarias(a) {

    if(a == 'DEL') {
      this.controle = '';
      return '';

    } else if(a == 'AC') {
      this.controle = this.controle.slice(0, -1);
      return '';

    } else if(a == 'Ans') {
      this.controle = this.controle + this.ultimaResposta;
      return '';

    } else {
      return a;
    }

  }

}
