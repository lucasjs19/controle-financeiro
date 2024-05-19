import { DespesasGrupo } from "./DespesaGrupo";

export interface DespesaCategoria {
    id: number | null;
    descricao: string; 
    despesaGrupo: DespesasGrupo;
}
