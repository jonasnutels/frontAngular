import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoContaComponent } from './deposito-conta.component';

describe('DepositoContaComponent', () => {
  let component: DepositoContaComponent;
  let fixture: ComponentFixture<DepositoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositoContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
