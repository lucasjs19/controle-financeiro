package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.DespesasCategorias;
import com.lucas.controlefinanceiro.model.entities.DespesasGrupos;
import com.lucas.controlefinanceiro.repositories.DespesasCategoriaRepository;
import com.lucas.controlefinanceiro.repositories.DespesasGrupoRepository;
import com.lucas.controlefinanceiro.services.abstrato.DespesasCategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class DespesasCategoriaServiceImpl implements DespesasCategoriaService {
    @Autowired
    DespesasCategoriaRepository despesasCategoriaRepository;
    @Autowired
    DespesasGrupoRepository despesasGrupoRepository;
    @Override
    public DespesasCategorias getDespesaCategoriaById(Long id) {
        Optional<DespesasCategorias> despesasCategorias = despesasCategoriaRepository.findById(id);
        return despesasCategorias.orElse(null);
    }
    @Override
    public List<DespesasCategorias> getAllDespesasCategorias() {
        return despesasCategoriaRepository.findAll();
    }

    @Override
    public List<DespesasCategorias> getAllDespesasCategoriasByGrupo(Long idGrupo) {
        Optional<DespesasGrupos> despesasGruposOptional  = despesasGrupoRepository.findById(idGrupo);

        if (despesasGruposOptional.isPresent()) {
            DespesasGrupos despesasGrupos = despesasGruposOptional.get();
            return despesasCategoriaRepository.findBydespesasGrupos(despesasGrupos);
        } else {
            return Collections.emptyList();
        }
    }
}
