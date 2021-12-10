import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { VisorComponent } from './calculadora/visor/visor.component';
import { BotaoComponent } from './calculadora/botao/botao.component';
import { LinhaComponent } from './calculadora/linha/linha.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    VisorComponent,
    BotaoComponent,
    LinhaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
