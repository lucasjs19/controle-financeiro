package com.lucas.controlefinanceiro.controllers;

import com.lucas.controlefinanceiro.model.entities.Cartoes;
import com.lucas.controlefinanceiro.model.entities.Despesas;
import com.lucas.controlefinanceiro.model.entities.VwDespesasDetalhadas;
import com.lucas.controlefinanceiro.services.abstrato.DespesasService;
import com.lucas.controlefinanceiro.services.abstrato.VwDespesasDetalhadasService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VwDespesasDetalhadasController {
    @Autowired
    VwDespesasDetalhadasService vwDespesasDetalhadasService;

    @GetMapping("/despesas-detalhadas")
    public List<VwDespesasDetalhadas> listarDepesasDetalhadas(){
        return vwDespesasDetalhadasService.getAllDespesasDetalhadas();
    }

}
