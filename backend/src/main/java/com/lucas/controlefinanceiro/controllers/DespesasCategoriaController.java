package com.lucas.controlefinanceiro.controllers;

import com.lucas.controlefinanceiro.model.entities.DespesasCategorias;
import com.lucas.controlefinanceiro.services.abstrato.DespesasCategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DespesasCategoriaController {
    @Autowired
    DespesasCategoriaService despesasCategoriaService;

    @GetMapping("/despesas-categorias/{id}")
    public DespesasCategorias getDespesaCategoriaById(@PathVariable("id") Long id){
        return despesasCategoriaService.getDespesaCategoriaById(id);
    }

    @GetMapping("/despesas-categorias")
    public List<DespesasCategorias> listarDespesasCategorias(){
        return despesasCategoriaService.getAllDespesasCategorias();
    }

    @GetMapping("/despesas-categorias/grupo/{id}")
    public List<DespesasCategorias> getDespesaCategoriaByGrupo(@PathVariable("id") Long id){
        return (List<DespesasCategorias>) despesasCategoriaService.getAllDespesasCategoriasByGrupo(id);
    }
}
