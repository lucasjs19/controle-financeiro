import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCartoesComponent } from './cadastrar-cartoes.component';

describe('CadastrarCartoesComponent', () => {
  let component: CadastrarCartoesComponent;
  let fixture: ComponentFixture<CadastrarCartoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarCartoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
