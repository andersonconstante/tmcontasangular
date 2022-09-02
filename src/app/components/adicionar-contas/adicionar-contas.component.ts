import { Component, OnInit } from '@angular/core';
import { ContasService } from 'src/app/services/contas.service';
@Component({
  selector: 'app-adicionar-contas',
  templateUrl: './adicionar-contas.component.html',
  styleUrls: ['./adicionar-contas.component.html']
})
export class AdicionarContasComponent implements OnInit {
  conta = {
    nomeCliente: '',
    nomeBanco: '',
    numeroBanco: '',
    numeroAgencia: '',
    numeroConta: '',
    published: false
  };
  submitted = false;
  constructor(private contasService: ContasService) { }
  ngOnInit() {
  }
  saveConta() {
    const data = {
      nomeCliente: this.conta.nomeCliente,
      nomeBanco: this.conta.nomeBanco,
      numeroBanco: this.conta.numeroBanco,
      numeroAgencia: this.conta.numeroAgencia,
      numeroConta: this.conta.numeroConta,
      
    };
    
    this.contasService.create(data)
      .subscribe(
        response => {
          console.log(response);  
          this.submitted = true;       
        },
        error => {
          console.log(error);
        });
  }
  newConta() {
   
    this.conta = {
      nomeCliente: '',
      nomeBanco: '',
      numeroBanco: '',
      numeroAgencia: '',
      numeroConta: '',
      published: false
    };
  }

  
}
