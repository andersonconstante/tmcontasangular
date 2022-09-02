import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContasComponent } from './components/lista-contas/lista-contas.component';
import { AdicionarContasComponent } from './components/adicionar-contas/adicionar-contas.component';
import { ListaTransacoesComponent } from './components/lista-transacoes/lista-transacoes.component';
import { AdicionarTransacoesComponent } from './components/adicionar-transacoes/adicionar-transacoes.component';

const routes: Routes = [
  { path: '', redirectTo: 'conta', pathMatch: 'full' },
  { path: 'conta', component: ListaContasComponent },
  { path: 'cadastrar', component: AdicionarContasComponent },
  { path: 'transacoes', component: ListaTransacoesComponent },
  { path: 'cadastrarTransacoes', component: AdicionarTransacoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
