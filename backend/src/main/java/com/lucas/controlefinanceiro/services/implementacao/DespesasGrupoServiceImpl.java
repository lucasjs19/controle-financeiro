package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.Despesas;
import com.lucas.controlefinanceiro.model.entities.DespesasGrupos;
import com.lucas.controlefinanceiro.repositories.DespesasGrupoRepository;
import com.lucas.controlefinanceiro.services.abstrato.DespesasGrupoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DespesasGrupoServiceImpl implements DespesasGrupoService {
    @Autowired
    DespesasGrupoRepository despesasGrupoRepository;
    @Override
    public List<DespesasGrupos> getAllDespesasGrupos() {
        return despesasGrupoRepository.findAll();
    }

    @Override
    public DespesasGrupos getGrupoById(Long id) {
        Optional<DespesasGrupos> despesaGrupo = despesasGrupoRepository.findById(id);
        return despesaGrupo.orElse(null);
    }
}
