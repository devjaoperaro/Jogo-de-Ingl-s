import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoracaoModule { 
  constructor(
    public cheio : boolean,
    public urlCoracaoCheio : string = '/assets/coracao_cheio.png',
    public urlCoracaoVazio : string = "/assets/coracao_vazio.png"
  ){
  }


  public exibeCoracao() : string {
    if(this.cheio){
      return this.urlCoracaoCheio;
    }
    else{
      return this.urlCoracaoVazio;
    }
  }
}
