package com.lucas.controlefinanceiro.services.implementacao;

import com.lucas.controlefinanceiro.model.entities.Despesas;
import com.lucas.controlefinanceiro.repositories.DespesasRepository;
import com.lucas.controlefinanceiro.services.abstrato.DespesasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class DespesasServiceImpl implements DespesasService {
    @Autowired
    DespesasRepository despesasRepository;
    @Override
    public Despesas saveDespesa(Despesas despesa) {
        System.out.println(despesa.getPago());
        if (despesa.getPago() == null){
            despesa.setPago(false);
        }
        System.out.println(despesa.getPago());
        BigDecimal valorParcela = despesa.getValor().divide(new BigDecimal(despesa.getParcela()), 4, RoundingMode.HALF_UP);
        for (int i = 1; i <= despesa.getParcela(); i++){
            Despesas novaDespesa = new Despesas(despesa.getDescricao(), despesa.getVencimento().plusMonths(i-1), despesa.getDespesasTipo(), despesa.getDespesasGrupos(), despesa.getDespesasCategorias(), valorParcela, i, despesa.getPago());
            //System.out.println(novaDespesa.getDespesasGrupos().getDescricao());
            //System.out.println(novaDespesa.getDespesasCategorias().getDescricao());
            //System.out.println(novaDespesa.getDespesasTipo().getDescricao());
            Despesas despesaSalva = despesasRepository.save(novaDespesa);
        }
        return despesa;
    }

    @Override
    public List<Despesas> getAllDespesas() {
        List<Despesas> allDespesas = despesasRepository.findAll();
        return allDespesas;
    }

    @Override
    public List<Despesas> getAllDespesasPagas() {
        List<Despesas> allDespesasPagas = despesasRepository.findByPagoTrue();
        return allDespesasPagas;
    }

    @Override
    public Despesas getDespesaById(Long id) {
        Optional<Despesas> despesa = despesasRepository.findById(id);
        return despesa.orElse(null);
    }

    @Override
    public Despesas payDespesa(Long id) {
        Optional<Despesas> optionalDespesa = despesasRepository.findById(id);
        if (optionalDespesa.isPresent()){
            Despesas despesaPaga = optionalDespesa.get();
            despesaPaga.setPago(true);
            return despesasRepository.save(despesaPaga);
        }else{
            throw new RuntimeException("Despesa não encontrada com o ID: " + id);
        }
    }

    @Override
    public Despesas unpayDespesa(Long id) {
        Optional<Despesas> optionalDespesa = despesasRepository.findById(id);
        if (optionalDespesa.isPresent()){
            Despesas despesaAberta = optionalDespesa.get();
            despesaAberta.setPago(false);
            return despesasRepository.save(despesaAberta);
        }else{
            throw new RuntimeException("Despesa não encontrada com o ID: " + id);
        }
    }
}
