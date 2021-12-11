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
  controleValores = '';
  raiz = 0;
  exp = 0;

  funcaoIgual() {

    this.controle = (eval(this.controleValores)) + '';
    this.controleValores = (eval(this.controleValores)) + '';

    console.log(this.controle);
    console.log(this.controleValores);

    if (this.controleValores == undefined) {
      this.controleValores = '';
      this.controle = '';
    }

    this.ultimaResposta = this.controle;
  }

  funcaoCalculadora(evento) {

    evento = this.funcoesSecundarias(evento);

    if(this.controle == '0') {
      this.controle = '';
      this.controleValores = '';
    }

    if (evento == '=') {
      this.funcaoIgual();
    } else {
      this.controle = this.controle + evento;
      this.controleValores = this.controleValores + evento;
    }
  }

  funcoesSecundarias(a) {

    if (this.raiz == 1 && a != "=" && a != 'DEL' && a != 'AC' && a != 'Ans' && a != 'EXP') {
      this.controleValores = this.controleValores + a + ")";
      this.controle = this.controle + a;
      this.raiz = 0;
      
      return '';
    }

    if (this.exp == 1 && a != '=' && a != 'DEL' && a != 'AC' && a != 'Ans') {
      this.exp = 0;
      return a;
    }

    if (a == 'DEL') {
      this.controle = this.controle.slice(0, -1);
      this.controleValores = this.controleValores.slice(0, -1);
      return '';

    } else if (a == 'AC') {
      this.controle = '';
      this.controleValores = '';
      return '';

    } else if (a == 'Ans') {
      this.controle = this.controle + this.ultimaResposta;
      this.controleValores = this.controleValores + this.ultimaResposta
      return '';

    } else if (a == '√') {
      this.controleValores = this.controleValores + "Math.sqrt(";
      this.controle = this.controle + "√";
      this.raiz = 1;
      return '';

    } else if (a == "^") {
      this.controle = this.controle + "^";
      this.controleValores = this.controleValores + "**";
      return '';

    } else if (a == 'EXP') {
      this.controle = this.controle + "E";
      this.controleValores = this.controleValores + "10**";
      this.exp = 1;
      return '';

    } else {
      return a;
    }

  }

}
