import { NgModule } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ContaListComponent } from './conta-list/conta-list.component';
import { CreateContaComponent } from './create-conta/create-conta.component';
import { DepositoContaComponent } from './deposito-conta/deposito-conta.component';
import { SaqueContaComponent } from './saque-conta/saque-conta.component';
import { TransferenciaContaComponent } from './transferencia-conta/transferencia-conta.component';
import { UpdatecontaComponent } from './updateconta/updateconta.component';


const routes: Routes = [
  {path: 'contas', component: ContaListComponent},
  {path: '', redirectTo: 'contas', pathMatch: 'full'},
  {path: 'create-conta',component: CreateContaComponent},
  {path: 'updateconta/:id', component: UpdatecontaComponent},
  {path: 'deposito-conta/:id', component: DepositoContaComponent},
  {path: 'saque-conta/:id', component: SaqueContaComponent},
  {path: 'transferencia-conta/:id', component: TransferenciaContaComponent}
  
];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
