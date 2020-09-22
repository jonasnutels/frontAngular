import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContaListComponent } from './conta-list/conta-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateContaComponent } from './create-conta/create-conta.component';
import { FormsModule } from '@angular/forms';
import { UpdatecontaComponent } from './updateconta/updateconta.component';
import { DepositoContaComponent } from './deposito-conta/deposito-conta.component';
import { SaqueContaComponent } from './saque-conta/saque-conta.component';
import { TransferenciaContaComponent } from './transferencia-conta/transferencia-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaListComponent,
    CreateContaComponent,
    UpdatecontaComponent,
    DepositoContaComponent,
    SaqueContaComponent,
    TransferenciaContaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
