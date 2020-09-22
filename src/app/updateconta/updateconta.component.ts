import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from '../conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-updateconta',
  templateUrl: './updateconta.component.html',
  styleUrls: ['./updateconta.component.css']
})
export class UpdatecontaComponent implements OnInit {
  id: number;
  conta: Conta = new Conta();
  constructor(private contaService: ContaService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contaService.getContaById(this.id).
    subscribe (data =>{
      this.conta = data;
    }, error => console.log (error));

    }
    updateConta() {
      this.contaService.updateConta(this.id, this.conta)
        .subscribe(data => {
          console.log(data);
          this.conta = new Conta();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.updateConta();    
    }
  
    gotoList() {
      this.router.navigate(['/contas']);
    }
  }


