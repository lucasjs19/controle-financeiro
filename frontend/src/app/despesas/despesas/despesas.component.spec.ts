import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasComponent } from './DespesasComponent';

describe('DespesasComponent', () => {
  let component: DespesasComponent;
  let fixture: ComponentFixture<DespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespesasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
