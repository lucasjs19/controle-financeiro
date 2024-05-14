import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarBancosComponent } from './cadastrar-bancos.component';

describe('CadastrarBancosComponent', () => {
  let component: CadastrarBancosComponent;
  let fixture: ComponentFixture<CadastrarBancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarBancosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarBancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
