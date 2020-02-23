// import { CoracaoModule } from './../shared/coracao.module';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CoracaoModule } from '../shared/coracao.module';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges{

  @Input() tentativas: number;

  public coracoes : CoracaoModule[] = [
    new CoracaoModule(true ), new CoracaoModule(true), new CoracaoModule(true), new CoracaoModule(true)
  ];

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.tentativas <= this.coracoes.length){
      let i = this.coracoes.length - this.tentativas;
      this.coracoes[i - 1].cheio = false; 
    }
  }

}
