package com.lucas.controlefinanceiro.services.abstrato;


import com.lucas.controlefinanceiro.model.entities.Cartoes;

import java.util.List;

public interface CartoesService {
    Cartoes saveCartao(Cartoes cartao);
    List<Cartoes> getAllCartoes();
    Cartoes getCartaoById(Long id);
    Cartoes updateCartaoById(Cartoes cartao);
}
