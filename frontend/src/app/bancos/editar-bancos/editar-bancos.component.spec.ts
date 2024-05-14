import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBancosComponent } from './editar-bancos.component';

describe('EditarBancosComponent', () => {
  let component: EditarBancosComponent;
  let fixture: ComponentFixture<EditarBancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarBancosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarBancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
