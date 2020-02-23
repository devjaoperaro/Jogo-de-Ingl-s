import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public rodada: number = 0;
  public rodadaFrase: Frase;

  public resposta: string = '';
  public limpo;
  
  public progresso: number = 0;

  public tentativas = 4;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() { 
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  
  atualizaFrase(){  
    if(this.rodadaFrase.frasePtbr == this.resposta){
      alert("você acertou, parabêns!!!")

      this.rodada++

      this.progresso = this.progresso + 25;     //(100 / this.frases.length)
      console.log(this.progresso);
      
      if(this.rodada === 4){
        this.encerrarJogo.emit("vitoria");
      }

      this.atualizaRodada()

    }else{
      this.tentativas--;
      if(this.tentativas === -1){
        this.encerrarJogo.emit("derrota")
      }
    }

  }
  public atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = ''
  }


}
