import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public name: string = "";

  // nome(recebe){
  //   this.name = recebe;
  // }

  salvar(){
    
  }

}
