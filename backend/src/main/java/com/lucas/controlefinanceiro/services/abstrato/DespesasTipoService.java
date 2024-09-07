package com.lucas.controlefinanceiro.services.abstrato;

import com.lucas.controlefinanceiro.model.entities.DespesasTipo;

import java.util.List;

public interface DespesasTipoService {
    List<DespesasTipo> getAllDespesasTipo();
    DespesasTipo getTipoById(Long id);

}
