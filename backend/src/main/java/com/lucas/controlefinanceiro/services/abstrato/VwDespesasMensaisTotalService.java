package com.lucas.controlefinanceiro.services.abstrato;


import com.lucas.controlefinanceiro.model.entities.VwDespesasMensaisTotal;

import java.util.List;

public interface VwDespesasMensaisTotalService {
    List<VwDespesasMensaisTotal> getAllDespesasMensaisTotal();
}
