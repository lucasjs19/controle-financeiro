package com.lucas.controlefinanceiro.model.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Table (name = "VW_DESPESAS_MENSAIS")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VwDespesasMensais {
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

    public VwDespesasMensais(String descricao, LocalDate vencimento, DespesasTipo despesasTipo, DespesasGrupos despesasGrupos, DespesasCategorias despesasCategorias, BigDecimal valor, Integer parcela) {
        this.descricao = descricao;
        this.vencimento = vencimento;
        this.despesasTipo = despesasTipo;
        this.despesasGrupos = despesasGrupos;
        this.despesasCategorias = despesasCategorias;
        this.valor = valor;
        this.parcela = parcela;
    }
}
