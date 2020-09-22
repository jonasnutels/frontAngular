import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaContaComponent } from './transferencia-conta.component';

describe('TransferenciaContaComponent', () => {
  let component: TransferenciaContaComponent;
  let fixture: ComponentFixture<TransferenciaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciaContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
