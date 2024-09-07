package com.lucas.controlefinanceiro.services.abstrato;

import com.lucas.controlefinanceiro.model.entities.Despesas;

import java.util.List;

public interface DespesasService {
    Despesas saveDespesa(Despesas despesa);
    List<Despesas> getAllDespesas();
    List<Despesas> getAllDespesasPagas();
    Despesas getDespesaById(Long id);
    Despesas payDespesa(Long id);
    Despesas unpayDespesa(Long id);
}
