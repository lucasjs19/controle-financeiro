package com.lucas.controlefinanceiro.services.abstrato;

import com.lucas.controlefinanceiro.model.entities.DespesasCategorias;
import com.lucas.controlefinanceiro.model.entities.DespesasGrupos;

import java.util.List;

public interface DespesasGrupoService {
    List<DespesasGrupos> getAllDespesasGrupos();

    DespesasGrupos getGrupoById(Long id);
}
