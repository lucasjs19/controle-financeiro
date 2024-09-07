package com.lucas.controlefinanceiro.repositories;

import com.lucas.controlefinanceiro.model.entities.VwDespesasDetalhadas;
import com.lucas.controlefinanceiro.model.entities.VwDespesasMensais;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VwDespesasMensaisRepository extends JpaRepository<VwDespesasMensais, Long> {
}
