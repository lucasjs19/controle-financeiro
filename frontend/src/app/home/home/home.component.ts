import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router){}

  onClickBancos(){
    this.router.navigate(['/bancos']);
  }

  onClickCartoes(){
    this.router.navigate(['/cartoes']);
  }

  onClickDespesas(){
    this.router.navigate(['/despesas']);
  }
}
