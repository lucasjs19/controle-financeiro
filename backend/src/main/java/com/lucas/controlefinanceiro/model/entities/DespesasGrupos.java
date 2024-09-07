package com.lucas.controlefinanceiro.model.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "DESPESAS_GRUPOS")
public class DespesasGrupos {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    Integer id;
    String descricao;
}
