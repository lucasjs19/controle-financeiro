package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.VwDespesasDetalhadas;
import com.lucas.controlefinanceiro.model.entities.VwDespesasMensais;
import com.lucas.controlefinanceiro.repositories.VwDespesasDetalhadasRepository;
import com.lucas.controlefinanceiro.repositories.VwDespesasMensaisRepository;
import com.lucas.controlefinanceiro.services.abstrato.VwDespesasDetalhadasService;
import com.lucas.controlefinanceiro.services.abstrato.VwDespesasMensaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VwDespesasMensaisServiceImpl implements VwDespesasMensaisService {
    @Autowired
    VwDespesasMensaisRepository despesasMensaisRepository;

    @Override
    public List<VwDespesasMensais> getAllDespesasMensais() {
        return despesasMensaisRepository.findAll();
    }
}
