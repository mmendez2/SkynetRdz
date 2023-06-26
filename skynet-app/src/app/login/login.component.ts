import { Component } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = "";
  contrasena: string = "";
  error: string= "";

  constructor(private autenticacionService: AutenticacionService,private router: Router) { }

  login() {
    this.autenticacionService.login(this.usuario)
      .subscribe(
        () => {
          this.router.navigate(['home']);
        },
        error => {
          this.error = error.message;
        }
      );
  }
}
