import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecontaComponent } from './updateconta.component';

describe('UpdatecontaComponent', () => {
  let component: UpdatecontaComponent;
  let fixture: ComponentFixture<UpdatecontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecontaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
