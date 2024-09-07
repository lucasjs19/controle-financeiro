package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.VwDespesasMensaisTotal;
import com.lucas.controlefinanceiro.repositories.VwDespesasMensaisTotalRepository;
import com.lucas.controlefinanceiro.services.abstrato.VwDespesasMensaisTotalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VwDespesasMensaisTotalServiceImpl implements VwDespesasMensaisTotalService {
    @Autowired
    VwDespesasMensaisTotalRepository vwDespesasMensaisTotalRepository;
    @Override
    public List<VwDespesasMensaisTotal> getAllDespesasMensaisTotal() {
        return vwDespesasMensaisTotalRepository.findAll();
    }
}
