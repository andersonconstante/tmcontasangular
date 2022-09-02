import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Contas } from 'src/model/contas.model' 
//Importa teu service
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // declara uma variável para receber os dados do form
  public form!: FormGroup;
  contas!: Contas[];

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit() {
    // no parametro você pode adicionar quantos campos você precisar
    this.form = this.formBuilder.group({
      nomeCliente: ['', Validators.required], // se deixar com aspas '' vai ser uma string
      
    });

    this.formService.getContas().subscribe((dados: Contas[]) => {
      this.contas = dados;
      console.log(dados);
    })
  }

  // esse método vocÇê deve chamar lá no botão de enviar
  sendDataToAPI(): void {
    this.formService
      .sendDataToApi(this.form.value)
      .subscribe((response) => console.log(response.data)); // no console log vai retornar oq a API mandar
  }
}
