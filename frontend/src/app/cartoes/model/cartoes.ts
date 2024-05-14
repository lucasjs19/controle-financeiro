import { Bancos } from "../../bancos/model/bancos";

export interface Cartoes {
    id: number | null;
    nome: string; 
    banco: Bancos;
}
