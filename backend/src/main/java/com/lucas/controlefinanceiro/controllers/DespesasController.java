package com.lucas.controlefinanceiro.controllers;

import com.lucas.controlefinanceiro.model.entities.Despesas;
import com.lucas.controlefinanceiro.services.abstrato.DespesasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DespesasController {
    @Autowired
    DespesasService despesasService;

    @PostMapping("/despesas")
    public Despesas saveDespesa(@RequestBody Despesas despesa){
        return despesasService.saveDespesa(despesa);
    }
}
