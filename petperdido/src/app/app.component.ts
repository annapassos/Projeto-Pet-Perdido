import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  menuVisivel = true;
  dados = {ocorrencia: "", tipo: "", raca: "", cor: "", sexo: "", local: "", foto: ""};
  listaAchados =[];
  listaPerdidos =[];

constructor(){
  let dadosStringPerdidos = localStorage.getItem('cardsPerdidos');    // pega os dados do local storage
  if(dadosStringPerdidos){
    this.listaPerdidos = JSON.parse(dadosStringPerdidos);             //  transforma os dados que são string em objeto novamente
  }

  let dadosStringAchados = localStorage.getItem('cardsAchados');      // pega os dados do local storage
  if(dadosStringAchados){
    this.listaAchados = JSON.parse(dadosStringAchados);             //  transforma os dados que são string em objeto novamente
  }
}

  alternarMenu(){                                                    // mostra e esconde o menu
    if(this.menuVisivel){
      this.menuVisivel = false;
    } else{
      this.menuVisivel = true;
    }
  } 

  inserir(){
    if(this.dados.ocorrencia === "Perdido"){
    this.listaPerdidos.push(this.dados);                                                                 // puxa dos dados inseridos e guarda em uma lista
    this.dados = {ocorrencia: "", tipo: "", raca: "", cor: "", sexo: "", local: "", foto: ""}     // apaga os dados dos campos que foram inseridos

    let dadosStringPerdidos = JSON.stringify(this.listaPerdidos);                                                //JSON transforma objeto em string e vice versa
    localStorage.setItem('cardsPerdidos', dadosStringPerdidos);                                            //armazena os dados no local storage - para ver é só por no inspecionar, app - local storage
    }
    
    else if(this.dados.ocorrencia === "Achado"){
    this.listaAchados.push(this.dados);                                                                 // puxa dos dados inseridos e guarda em uma lista
    this.dados = {ocorrencia: "", tipo: "", raca: "", cor: "", sexo: "", local: "", foto: ""}
    
    let dadosStringAchados = JSON.stringify(this.listaAchados);                                                //JSON transforma objeto em string e vice versa
    localStorage.setItem('cardsAchados', dadosStringAchados); 
    }
  }

  limpar(){
    this.listaAchados = [];
    this.listaPerdidos = [];
    localStorage.clear();
  }
}