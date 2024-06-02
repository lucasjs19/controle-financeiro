package com.lucas.controlefinanceiro.services.abstrato;

import com.lucas.controlefinanceiro.model.entities.VwDespesasDetalhadas;
import com.lucas.controlefinanceiro.model.entities.VwDespesasMensais;

import java.util.List;

public interface VwDespesasMensaisService {
    List<VwDespesasMensais> getAllDespesasMensais();

}
