package com.lucas.controlefinanceiro.model.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Despesas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String descricao;
    LocalDate vencimento;
    @ManyToOne
    @JoinColumn(name = "DESPESA_TIPO")
    DespesasTipo despesasTipo;
    @ManyToOne
    @JoinColumn(name = "DESPESA_GRUPO")
    DespesasGrupos despesasGrupos;
    @ManyToOne
    @JoinColumn(name = "DESPESA_CATEGORIA")
    DespesasCategorias despesasCategorias;
    BigDecimal valor;
    Integer parcela;
    Boolean pago;

    public Despesas(String descricao, LocalDate vencimento, DespesasTipo despesasTipo, DespesasGrupos despesasGrupos, DespesasCategorias despesasCategorias, BigDecimal valor, Integer parcela, Boolean pago) {
        this.descricao = descricao;
        this.vencimento = vencimento;
        this.despesasTipo = despesasTipo;
        this.despesasGrupos = despesasGrupos;
        this.despesasCategorias = despesasCategorias;
        this.valor = valor;
        this.parcela = parcela;
        this.pago = pago;
    }
}
