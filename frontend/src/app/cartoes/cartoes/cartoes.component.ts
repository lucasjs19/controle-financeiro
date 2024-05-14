import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cartoes } from '../model/cartoes';
import { CartoesService } from '../service/cartoes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './cartoes.component.html',
  styleUrl: './cartoes.component.scss'
})
export class CartoesComponent {
  cartoes: Observable<Cartoes[]> = of([]);
  displayedColumns = ['id', 'nome', 'banco', 'actions'];

  constructor(
    private cartoesService: CartoesService,
    private router: Router,
    private route: ActivatedRoute) {
    this.cartoes = this.cartoesService.list();
  }

  editar(id: number) {
    this.router.navigate(['editar/' + id], { relativeTo: this.route });
  }

}
