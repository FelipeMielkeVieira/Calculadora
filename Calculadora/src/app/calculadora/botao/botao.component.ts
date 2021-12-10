import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  @Input() valorBotao;
  @Output() clickBotao = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clicouBotao(valor) {
    this.clickBotao.emit(valor);
  }

}
