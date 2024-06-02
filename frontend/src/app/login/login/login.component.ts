import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  inputUser: String = '';
  inputPassword: String = '';

}
