import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarContasComponent } from './components/adicionar-contas/adicionar-contas.component';
import { ListaContasComponent } from './components/lista-contas/lista-contas.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdicionarTransacoesComponent } from './components/adicionar-transacoes/adicionar-transacoes.component';
import { ListaTransacoesComponent } from './components/lista-transacoes/lista-transacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarContasComponent,
    ListaContasComponent,
    AdicionarTransacoesComponent,
    ListaTransacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
