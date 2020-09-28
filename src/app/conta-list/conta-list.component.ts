import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Conta } from '../conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.css']
})
export class ContaListComponent implements OnInit {
  contas: Observable<Conta[]>;
  constructor(private contaService: ContaService,
    private router: Router) {}

  ngOnInit() {
      this.getContas();
      
  }
  private getContas(){
    this.contaService.getContasList().subscribe(data =>{
      this.contas = data;
      });


  }
  updateContas (id: number){
  this.router.navigate(['updateconta', id]);
  }

  depositoConta(id: number){
    this.router.navigate(['/deposito-conta', id]);
  }
  saqueConta(id: number){
    this.router.navigate(['/saque-conta', id])
  }
  transConta(id:number){
    this.router.navigate([''])
  }



}
