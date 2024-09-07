package com.lucas.controlefinanceiro.controllers;

import com.lucas.controlefinanceiro.model.entities.VwDespesasDetalhadas;
import com.lucas.controlefinanceiro.model.entities.VwDespesasMensais;
import com.lucas.controlefinanceiro.services.abstrato.VwDespesasDetalhadasService;
import com.lucas.controlefinanceiro.services.abstrato.VwDespesasMensaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VwDespesasMensaisController {
    @Autowired
    VwDespesasMensaisService vwDespesasMensaisService;

    @GetMapping("/despesas-mensais")
    public List<VwDespesasMensais> listarDepesasMensais(){
        return vwDespesasMensaisService.getAllDespesasMensais();
    }

}
