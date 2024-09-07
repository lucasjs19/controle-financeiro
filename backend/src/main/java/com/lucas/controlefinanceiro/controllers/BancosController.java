package com.lucas.controlefinanceiro.controllers;

import com.lucas.controlefinanceiro.model.entities.Bancos;
import com.lucas.controlefinanceiro.repositories.BancosRepository;
import com.lucas.controlefinanceiro.services.abstrato.BancosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BancosController {
    @Autowired
    private BancosService bancosService;

    @GetMapping("/bancos")
    public List<Bancos> listarBancos(){
        return bancosService.getAllBancos();
    }

    @GetMapping("/bancos/{id}")
    public Bancos getBancoById(@PathVariable("id") Long id){
        return bancosService.getBancoById(id);
    }

    @PostMapping("/bancos")
    public Bancos saveBanco(@RequestBody Bancos banco){
        return bancosService.saveBanco(banco);
    }

    @PutMapping("/bancos/{id}")
    public Bancos updateBanco(@RequestBody Bancos banco){
        return bancosService.updateBancoById(banco);
    }


}
