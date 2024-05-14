package com.lucas.controlefinanceiro.controllers;

import com.lucas.controlefinanceiro.model.entities.Bancos;
import com.lucas.controlefinanceiro.model.entities.Cartoes;
import com.lucas.controlefinanceiro.services.abstrato.CartoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartoesController {

    @Autowired
    CartoesService cartoesService;

    @GetMapping("/cartoes")
    public List<Cartoes> listarCartoes(){
        return cartoesService.getAllCartoes();
    }

    @GetMapping("/cartoes/{id}")
    public Cartoes getCartaoById(@PathVariable("id") Long id){
        return cartoesService.getCartaoById(id);
    }

    @PostMapping("/cartoes")
    public Cartoes saveCartao(@RequestBody Cartoes cartao){
        return cartoesService.saveCartao(cartao);
    }

    @PutMapping("/cartoes/{id}")
    public Cartoes updateCartao(@RequestBody Cartoes cartao){
        return cartoesService.updateCartaoById(cartao);
    }
}
