package com.lucas.controlefinanceiro.repositories;

import com.lucas.controlefinanceiro.model.entities.VwDespesasDetalhadas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VwDespesasDetalhadasRepository extends JpaRepository<VwDespesasDetalhadas, Long> {
}
