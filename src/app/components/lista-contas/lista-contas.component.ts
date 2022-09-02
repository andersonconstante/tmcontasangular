import { Component, OnInit } from '@angular/core';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-lista-contas',
  templateUrl: './lista-contas.component.html',
  styleUrls: ['./lista-contas.component.css']
})
export class ListaContasComponent implements OnInit {
  contas:any;
  currentConta: any;
  currentIndex = -1;
  id = '';
  constructor(private contasService: ContasService) { }
  ngOnInit() {
    this.retrieveContas();
  }
  retrieveContas() {
    this.contasService.getAll()
      .subscribe(
        data => {
          this.contas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrieveContas();
    this.currentConta = null ;
    this.currentIndex = -1;
  }
  setActiveConta(conta: any, index: number) {
    this.currentConta = conta;
    this.currentIndex = index;
  }

}
