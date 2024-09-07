package com.lucas.controlefinanceiro.services.abstrato;

import com.lucas.controlefinanceiro.model.entities.Despesas;
import com.lucas.controlefinanceiro.model.entities.VwDespesasDetalhadas;

import java.util.List;

public interface VwDespesasDetalhadasService {
    List<VwDespesasDetalhadas> getAllDespesasDetalhadas();

}
