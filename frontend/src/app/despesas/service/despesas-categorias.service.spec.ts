import { TestBed } from '@angular/core/testing';

import { DespesasCategoriasService } from './despesas-categorias.service';

describe('DespesasCategoriasService', () => {
  let service: DespesasCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DespesasCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
