import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from '../conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-create-conta',
  templateUrl: './create-conta.component.html',
  styleUrls: ['./create-conta.component.css']
})
export class CreateContaComponent implements OnInit {
  conta: Conta = new Conta();
  constructor(private contaService: ContaService,
    private router: Router) { }

    ngOnInit() {

    }
  

    saveConta(){ 
      this.contaService.createConta(this.conta)
      .subscribe(data =>{
        console.log(data);
        this.goToContaList(); 
      },
      error => console.log(error));
    }
    goToContaList(){
      this.router.navigate(['/contas']);
    }
    onSubmit(){
      this.saveConta();
    }
 }
  