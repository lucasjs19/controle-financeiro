package com.lucas.controlefinanceiro.controllers;

import com.lucas.controlefinanceiro.model.entities.Cartoes;
import com.lucas.controlefinanceiro.model.entities.DespesasTipo;
import com.lucas.controlefinanceiro.services.abstrato.DespesasTipoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DespesasTipoController {
    @Autowired
    DespesasTipoService despesasTipoService;

    @GetMapping("/despesas-tipo")
    public List<DespesasTipo> listarDespesasTipo(){
        return despesasTipoService.getAllDespesasTipo();
    }

    @GetMapping("/despesas-tipo/{id}")
    public DespesasTipo getTipoById(@PathVariable("id") Long id){
        return despesasTipoService.getTipoById(id);
    }

}
