package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.DespesasTipo;
import com.lucas.controlefinanceiro.repositories.DespesasTipoRepository;
import com.lucas.controlefinanceiro.services.abstrato.DespesasTipoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DespesasTipoImpl implements DespesasTipoService {
    @Autowired
    DespesasTipoRepository despesasTipoRepository;
    @Override
    public List<DespesasTipo> getAllDespesasTipo() {
        return despesasTipoRepository.findAll();
    }
}
