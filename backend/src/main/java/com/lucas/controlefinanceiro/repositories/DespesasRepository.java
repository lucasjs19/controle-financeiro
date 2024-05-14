package com.lucas.controlefinanceiro.repositories;

import com.lucas.controlefinanceiro.model.entities.Despesas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DespesasRepository extends JpaRepository<Despesas, Long> {
}
