package com.lucas.controlefinanceiro.repositories;

import com.lucas.controlefinanceiro.model.entities.Cartoes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartoesRepository extends JpaRepository<Cartoes, Long> {
}
