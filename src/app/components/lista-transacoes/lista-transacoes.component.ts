import { Component, OnInit } from '@angular/core';
import { TransacoesService } from 'src/app/services/transacoes.service';

@Component({
  selector: 'app-lista-transacoes',
  templateUrl: './lista-transacoes.component.html',
  styleUrls: ['./lista-transacoes.component.css']
})
export class ListaTransacoesComponent implements OnInit {

  transacoes:any;
  currentTransacao: any;
  currentIndex = -1;
  id = '';
  constructor(private transacoesService: TransacoesService) { }
  ngOnInit() {
    this.retrieveTransacao();
  }
  retrieveTransacao() {
    this.transacoesService.getAll()
      .subscribe(
        data => {
          this.transacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrieveTransacao();
    this.currentTransacao = null ;
    this.currentIndex = -1;
  }
  setActiveConta(transacao: any, index: number) {
    this.currentTransacao = transacao;
    this.currentIndex = index;
  }

}
