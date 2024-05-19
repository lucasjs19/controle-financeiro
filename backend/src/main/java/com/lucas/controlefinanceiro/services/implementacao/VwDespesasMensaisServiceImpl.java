package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.VwDespesasMensais;
import com.lucas.controlefinanceiro.repositories.VwDespesasMensaisRepository;
import com.lucas.controlefinanceiro.services.abstrato.VwDespesasMensaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VwDespesasMensaisServiceImpl implements VwDespesasMensaisService {
    @Autowired
    VwDespesasMensaisRepository vwDespesasMensaisRepository;
    @Override
    public List<VwDespesasMensais> getAllDespesasMensaisTotal() {
        return vwDespesasMensaisRepository.findAll();
    }
}
