package com.lucas.controlefinanceiro.model.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table( name = "DESPESAS_CATEGORIAS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DespesasCategorias {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String descricao;
    @ManyToOne
    @JoinColumn(name = "ID_GRUPO")
    DespesasGrupos despesasGrupos;

}
