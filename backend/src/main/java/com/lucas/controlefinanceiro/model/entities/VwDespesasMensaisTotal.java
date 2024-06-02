package com.lucas.controlefinanceiro.model.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "VW_DESPESAS_MENSAIS_TOTAL")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VwDespesasMensaisTotal {
    @Id
    private String mesAno;
    private BigDecimal valor;
}
