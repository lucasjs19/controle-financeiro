import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Observable, map } from 'rxjs';
import { Bancos } from '../model/bancos';
import { ActivatedRoute, Router } from '@angular/router';
import { BancosService } from '../service/bancos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-bancos',
  standalone: true,
  imports: [AppMaterialModule, CommonModule, FormsModule],
  templateUrl: './editar-bancos.component.html',
  styleUrl: './editar-bancos.component.scss'
})
export class EditarBancosComponent {
  banco: Observable<Bancos>
  bancoId: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bancoService: BancosService 
  ){
    this.bancoId = this.activatedRoute.snapshot.paramMap.get('id');
    this.banco = this.bancoService.getBancoById(this.bancoId).pipe(
      map((data: any) => {
        return {
          id: data.id || null,
          nome: data.nome
        } as Bancos;
      })
    )
  }

  cancelar(){
    this.router.navigate(['/bancos'])
  }

  salvar(nome: string){
    this.banco.subscribe(banco => {
      const bancoAtualizado = {
        id: banco.id,
        nome: nome
      };
      this.bancoService.saveBanco(bancoAtualizado).subscribe({
        error: () => {
          alert("Ocorreu um erro ao atualizar o banco");
          this.router.navigate(['bancos'])
        },
        complete: () => {
          alert("Banco atualizado");
          this.router.navigate(['bancos'])
        }
      })
    })
  }

}
