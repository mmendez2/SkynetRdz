import { Component } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = "";
  contrasena: string = "";
  error: string= "";

  constructor(private autenticacionService: AutenticacionService) { }

  iniciarSesion() {
    /*this.autenticacionService.iniciarSesion(this.usuario, this.contrasena)
      .subscribe(
        () => {
          // Inicio de sesión exitoso, redireccionar a la lista
        },
        error => {
          this.error = error.message;
        }
      );*/
  }
}
