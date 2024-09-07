package com.lucas.controlefinanceiro.repositories;

import com.lucas.controlefinanceiro.model.entities.DespesasGrupos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DespesasGrupoRepository extends JpaRepository<DespesasGrupos, Long> {
}
