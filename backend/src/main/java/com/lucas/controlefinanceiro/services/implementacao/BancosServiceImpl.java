package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.Bancos;
import com.lucas.controlefinanceiro.repositories.BancosRepository;
import com.lucas.controlefinanceiro.services.abstrato.BancosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BancosServiceImpl implements BancosService {

    @Autowired
    private BancosRepository bancosRepository;
    @Override
    public Bancos saveBanco(Bancos banco) {
        return bancosRepository.save(banco);
    }

    @Override
    public List<Bancos> getAllBancos() {
        List<Bancos> allBancos = bancosRepository.findAll();
        return allBancos;
    }

    @Override
    public Bancos getBancoById(Long id) {
        Optional<Bancos> banco = bancosRepository.findById(id);
        return banco.orElse(null);
    }

    @Override
    public Bancos updateBancoById(Bancos banco) {
        return bancosRepository.save(banco);
    }
}
