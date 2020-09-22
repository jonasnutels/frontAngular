import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from '../conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-transferencia-conta',
  templateUrl: './transferencia-conta.component.html',
  styleUrls: ['./transferencia-conta.component.css']
})
export class TransferenciaContaComponent implements OnInit {

  id: number;
  valor:number;
  conta: Conta = new Conta();
  constructor(private contaService: ContaService,
    private router: Router, private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    
      this.id = this.route.snapshot.params['id'];
      this.valor = this.route.snapshot.params['valor'];
  
      
      
      this.contaService.getContaById(this.id).
      subscribe (data =>{
        
        this.conta = data;
      }, error => console.log (error));
  
      }
      
      depositoConta() {
        this.contaService.updateConta(this.id, this.conta)
          .subscribe(data => {
            console.log(data);
            this.conta = new Conta();
            this.gotoList();
          }, error => console.log(error));
      }
      depositoTeste() {
        this.router.navigate(['deposito-conta'], 
        { queryParams: { id: this.id, valor:this.valor} });
        this.gotoList();
      }
    
      onSubmit() {
        this.depositoTeste();
      }
    
      gotoList() {
        this.router.navigate(['/contas']);
      }
    }
  