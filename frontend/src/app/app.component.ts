import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    HttpClientModule,
    AppMaterialModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Controle Financeiro';

  constructor(private router: Router,
              private titleService: Title){
                this.titleService.setTitle(this.title)
              }

  onClickHome(){
    this.router.navigate([''])
  }

  onClickLancamentoDespesas(){
    this.router.navigate(['/despesas/lancar'])
  }

  onClickCadastroBancos(){
    this.router.navigate(['/bancos/cadastrar'])
  }

  onClickCadastroCartoes(){
    this.router.navigate(['/cartoes/cadastrar'])
  }

  redirectToGitHub() {
    window.open('https://github.com/lucasjs19', '_blank');
  }
}
