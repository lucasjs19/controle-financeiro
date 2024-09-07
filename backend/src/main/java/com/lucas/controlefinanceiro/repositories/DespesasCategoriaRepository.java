package com.lucas.controlefinanceiro.repositories;

import com.lucas.controlefinanceiro.model.entities.DespesasCategorias;
import com.lucas.controlefinanceiro.model.entities.DespesasGrupos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DespesasCategoriaRepository extends JpaRepository<DespesasCategorias, Long> {
    List<DespesasCategorias> findBydespesasGrupos(DespesasGrupos grupo);
}
