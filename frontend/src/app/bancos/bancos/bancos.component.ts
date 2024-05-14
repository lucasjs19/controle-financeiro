import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bancos } from '../model/bancos';
import { BancosService } from '../service/bancos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';

@Component({
  selector: 'app-bancos',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './bancos.component.html',
  styleUrl: './bancos.component.scss'
})
export class BancosComponent {
  bancos: Observable<Bancos[]> = of([]);
  displayedColumns = ['id', 'nome', 'actions'];

  constructor(
    private bancoService: BancosService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.bancos = this.bancoService.list();
  }

  onEdit(id: number) {
    return this.router.navigate(['editar/' + id], { relativeTo: this.route });
  }
}
