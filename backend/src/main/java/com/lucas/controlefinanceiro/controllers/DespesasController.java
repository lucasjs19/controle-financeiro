package com.lucas.controlefinanceiro.controllers;

import com.lucas.controlefinanceiro.model.entities.Despesas;
import com.lucas.controlefinanceiro.services.abstrato.DespesasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DespesasController {
    @Autowired
    DespesasService despesasService;

    @PutMapping("/despesas/pagar/{id}")
    public Despesas payDespesa (@PathVariable("id") Long id){
        return despesasService.payDespesa(id);
    }
    @PutMapping("/despesas/aberto/{id}")
    public Despesas unpayDespesa (@PathVariable("id") Long id){
        return despesasService.unpayDespesa(id);
    }

    @GetMapping("/despesas/pagas")
    public List<Despesas> getAllDespesasPagas(){
        return despesasService.getAllDespesasPagas();
    }
    @PostMapping("/despesas")
    public Despesas saveDespesa(@RequestBody Despesas despesa){
        return despesasService.saveDespesa(despesa);
    }
}
