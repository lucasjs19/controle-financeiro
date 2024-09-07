package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.Cartoes;
import com.lucas.controlefinanceiro.repositories.CartoesRepository;
import com.lucas.controlefinanceiro.services.abstrato.CartoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartoesServiceImpl implements CartoesService {

    @Autowired
    CartoesRepository cartoesRepository;
    @Override
    public Cartoes saveCartao(Cartoes cartao) {
        return cartoesRepository.save(cartao);
    }

    @Override
    public List<Cartoes> getAllCartoes() {
        List<Cartoes> allCartoes = cartoesRepository.findAll();
        return allCartoes;
    }

    @Override
    public Cartoes getCartaoById(Long id) {
        Optional<Cartoes> cartao = cartoesRepository.findById(id);
        return cartao.orElse(null);
    }

    @Override
    public Cartoes updateCartaoById(Cartoes cartao) {
        return cartoesRepository.save(cartao);
    }
}
