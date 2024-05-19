package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.Cartoes;
import com.lucas.controlefinanceiro.model.entities.DespesasTipo;
import com.lucas.controlefinanceiro.repositories.DespesasTipoRepository;
import com.lucas.controlefinanceiro.services.abstrato.DespesasTipoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DespesasTipoImpl implements DespesasTipoService {
    @Autowired
    DespesasTipoRepository despesasTipoRepository;
    @Override
    public List<DespesasTipo> getAllDespesasTipo() {
        return despesasTipoRepository.findAll();
    }

    @Override
    public DespesasTipo getTipoById(Long id) {
        Optional<DespesasTipo> tipo = despesasTipoRepository.findById(id);
        return tipo.orElse(null);
    }
}
