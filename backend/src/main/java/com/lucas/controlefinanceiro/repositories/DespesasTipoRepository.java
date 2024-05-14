package com.lucas.controlefinanceiro.repositories;

import com.lucas.controlefinanceiro.model.entities.DespesasTipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DespesasTipoRepository extends JpaRepository<DespesasTipo, Long> {
}
