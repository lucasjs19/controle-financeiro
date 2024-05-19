package com.lucas.controlefinanceiro.services.abstrato;

import com.lucas.controlefinanceiro.model.entities.Despesas;
import com.lucas.controlefinanceiro.model.entities.DespesasCategorias;

import java.util.List;

public interface DespesasCategoriaService {
    DespesasCategorias getDespesaCategoriaById(Long id);
    List<DespesasCategorias> getAllDespesasCategorias();

    List<DespesasCategorias> getAllDespesasCategoriasByGrupo(Long idGrupo);
}
