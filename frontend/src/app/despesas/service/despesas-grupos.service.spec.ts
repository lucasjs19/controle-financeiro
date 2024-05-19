import { TestBed } from '@angular/core/testing';

import { DespesasGruposService } from './despesas-grupos.service';

describe('DespesasGruposService', () => {
  let service: DespesasGruposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DespesasGruposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
