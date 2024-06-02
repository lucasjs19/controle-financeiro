package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.Despesas;
import com.lucas.controlefinanceiro.model.entities.VwDespesasDetalhadas;
import com.lucas.controlefinanceiro.repositories.DespesasRepository;
import com.lucas.controlefinanceiro.repositories.VwDespesasDetalhadasRepository;
import com.lucas.controlefinanceiro.services.abstrato.DespesasService;
import com.lucas.controlefinanceiro.services.abstrato.VwDespesasDetalhadasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Optional;

@Service
public class VwDespesasDetalhadasServiceImpl implements VwDespesasDetalhadasService {
    @Autowired
    VwDespesasDetalhadasRepository despesasDetalhadasRepository;


    @Override
    public List<VwDespesasDetalhadas> getAllDespesasDetalhadas() {
        return despesasDetalhadasRepository.findAll();
    }
}
