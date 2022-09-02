import { Component, OnInit } from '@angular/core';
import { TransacoesService } from 'src/app/services/transacoes.service';
import { Contas } from 'src/model/contas.model' 
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conta } from 'src/model/Conta';

@Component({
  selector: 'app-adicionar-transacoes',
  templateUrl: './adicionar-transacoes.component.html',
  styleUrls: ['./adicionar-transacoes.component.css']
})


export class AdicionarTransacoesComponent implements OnInit {
 
  public grupoContaOrigem!: FormGroup;
  public formulario!: FormGroup;
  public form!: FormGroup;
  contas!: Contas[];
  contaOrigem!: Contas[];  
  contaDestino!: Contas[];

  transacao = {
    contaOrigem: {},
    contaDestino: {},
    valorTransferencia:'',
    taxa:'',
    dataGendamento:'',
    dataTransferencia:'',
    tipo:''

  };
  submitted = false;




  
  constructor(
    private transacoesService: TransacoesService,
    private formBuilder: FormBuilder,
    private http: HttpClient
   ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({  

      contaOrigem: {
        nomeCliente: [null], 
        nomeBanco: [null], 
        numeroBanco: [null],
        numeroAgencia: [null],
        numeroConta: [null]     
      },
      contaDestino: {
        nomeCliente: [null], 
        nomeBanco: [null], 
        numeroBanco: [null],
        numeroAgencia: [null],
        numeroConta: [null]     
      },
      valorTransferencia: [null],
      taxa: [0],
      dataGendamento: [null],
      dataTransferencia: [null],
      tipo: [null]


    })


  
    this.transacoesService.getContas().subscribe(dados => {
      this.contas = dados;
      console.log(dados);
    })


  }

   onSubmit() {
    console.log(this.formulario);
    
    this.http.post('http://localhost:8080/agendamento/cadastrar',JSON.stringify(this.formulario.value),{headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
    .subscribe((dados: any)=> console.log(dados));
   //const data: any = this.formulario.value;
  // console.log(data);

  // this.contaOrigem = Object.keys(data).map(key => new Conta(data[key]));
  // console.log(JSON.stringify(this.contaOrigem) + "origem");

   //this.contaDestino = Object.keys(data).map(key => new Conta(data[key]));
  // console.log(this.contaDestino);
  // this.transacoesService.sendDataToApi(JSON.stringify(this.formulario.value));

}

  saveTransacao() {
    const data = {
     

      contaOrigem: this.formulario.get("contaOrigem"),
      contaDestino: this.formulario.get("contaDestino"),
      valorTransferencia: this.formulario.get("valorTransferencia"),
      taxa: this.formulario.get("taxa"),
      dataGendamento: this.formulario.get("dataGendamento"), 
      dataTransferencia:  this.formulario.get("dataTransferencia"),
      tipo:  this.formulario.get("tipo")
          
    };
    
    this.transacoesService.create(data)
      .subscribe(
        response => {
          console.log(response);  
          this.submitted = true;       
        },
        error => {
          console.log(error);
        });
  }
  newTransacao() {
   
    this.transacao = {
      contaOrigem: {},
      contaDestino: {},
      valorTransferencia:'',
      taxa:'',
      dataGendamento:'',
      dataTransferencia:'',
      tipo:''
    };
  }


  
 
}
function contaOrigem(contaOrigem: any) {
  throw new Error('Function not implemented.');
}

