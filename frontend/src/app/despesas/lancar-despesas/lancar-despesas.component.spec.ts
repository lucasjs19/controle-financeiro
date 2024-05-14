import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarDespesasComponent } from './lancar-despesas.component';

describe('LancarDespesasComponent', () => {
  let component: LancarDespesasComponent;
  let fixture: ComponentFixture<LancarDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancarDespesasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancarDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
