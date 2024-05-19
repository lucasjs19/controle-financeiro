import { DespesaCategoria } from "./DespesaCategoria";
import { DespesasGrupo } from "./DespesaGrupo";
import { TipoDespesa } from "./TipoDespesa";

export interface Despesas {
    id: number | null;
    descricao: String; 
    vencimento: Date;
    despesasTipo: TipoDespesa;
    despesasGrupos: DespesasGrupo;
    despesasCategorias: DespesaCategoria;
    valor: number;
    parcela: number;
}
