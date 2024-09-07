package com.lucas.controlefinanceiro.repositories;

import com.lucas.controlefinanceiro.model.entities.Bancos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BancosRepository extends JpaRepository<Bancos,Long> {
}
