import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { BancosService } from '../service/bancos.service';

@Component({
  selector: 'app-cadastrar-bancos',
  standalone: true,
  imports: [AppMaterialModule, FormsModule],
  templateUrl: './cadastrar-bancos.component.html',
  styleUrl: './cadastrar-bancos.component.scss'
})
export class CadastrarBancosComponent {

  constructor(
    private router: Router,
    private bancosService: BancosService) { }


  inputName: string = '';

  cancelar(){
    this.router.navigate(['/home']);
  }

  salvar(){
    const banco = { id: null, nome: this.inputName}
    this.bancosService.saveBanco(banco).subscribe({
      error: () => {
        alert("Ocorreu um erro ao cadastrar o fabricante!")
        this.router.navigate(['/bancos/cadastrar']);
      },
      complete: () => {
        alert("Banco cadastrado!")
        this.router.navigate(['/home']);
      }
    })
  }
  
    

    
}
