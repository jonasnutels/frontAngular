import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from '../conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-deposito-conta',
  templateUrl: './deposito-conta.component.html',
  styleUrls: ['./deposito-conta.component.css']
})
export class DepositoContaComponent implements OnInit {

  id: number;
  valor:number;

  conta: Conta = new Conta();
  constructor(private contaService: ContaService,
    private router: Router, private route: ActivatedRoute,
    ) { }
  ngOnInit(): void {    
    this.valor = this.route.snapshot.params['valor'];
    this.id = this.route.snapshot.params['id'];
    this.contaService.getContaById(this.id).
    subscribe (data =>{      
      this.conta = data;
    }, error => console.log (error));
    

    }
       
    depositoTeste() {
 this.contaService.depositoConta(this.id, this.valor)
 console.log(this.depositoTeste)     
    }
  
    onSubmit() {
      this.depositoTeste();
    }
  
    gotoList() {
      this.router.navigate(['/contas']);
    }
  }
