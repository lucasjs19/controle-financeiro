package com.lucas.controlefinanceiro.controllers;

import com.lucas.controlefinanceiro.model.entities.VwDespesasMensaisTotal;
import com.lucas.controlefinanceiro.services.abstrato.VwDespesasMensaisTotalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VwDespesasMensaisTotalController {
    @Autowired
    VwDespesasMensaisTotalService vwDespesasMensaisTotalService;
    @GetMapping("/despesas-mensais-total")
    public List<VwDespesasMensaisTotal> listarDespesasMensaisTotal(){
        return vwDespesasMensaisTotalService.getAllDespesasMensaisTotal();
    }

}
