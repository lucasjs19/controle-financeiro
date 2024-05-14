package com.lucas.controlefinanceiro.services.abstrato;

import com.lucas.controlefinanceiro.model.entities.Bancos;

import java.util.List;

public interface BancosService {
    Bancos saveBanco(Bancos banco);
    List<Bancos> getAllBancos();
    Bancos getBancoById(Long id);
    Bancos updateBancoById(Bancos banco);
}
