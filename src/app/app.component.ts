import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public andamentoJogo: boolean = true;

  public tipoEncerramento

  encerrarJogo(tipo: string){
    console.log(tipo);
    this.andamentoJogo = false;
    this.tipoEncerramento = tipo
  }

  restart(){
      this.andamentoJogo = true;
      this.tipoEncerramento = undefined;
  }

}

