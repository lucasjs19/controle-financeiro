package com.lucas.controlefinanceiro.controllers;

import com.lucas.controlefinanceiro.model.entities.DespesasGrupos;
import com.lucas.controlefinanceiro.services.abstrato.DespesasGrupoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DespesasGrupoController {

    @Autowired
    DespesasGrupoService despesasGrupoService;

    @GetMapping("/despesas-grupos")
    public List<DespesasGrupos> listarDespesasGrupos(){
        return despesasGrupoService.getAllDespesasGrupos();
    }

    @GetMapping("/despesas-grupos/{id}")
    public DespesasGrupos getGrupoById(@PathVariable("id")Long id){
        return despesasGrupoService.getGrupoById(id);
    }
}
