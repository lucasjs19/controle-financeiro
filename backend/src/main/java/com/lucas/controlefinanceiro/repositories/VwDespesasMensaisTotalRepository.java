package com.lucas.controlefinanceiro.repositories;

import com.lucas.controlefinanceiro.model.entities.VwDespesasMensaisTotal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VwDespesasMensaisTotalRepository extends JpaRepository<VwDespesasMensaisTotal, String>{
}
