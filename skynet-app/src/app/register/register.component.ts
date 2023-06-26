import { Component } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string="";
  correo: string="";
  contrasena: string="";
  error: string="";

  constructor(private autenticacionService: AutenticacionService) { }

  registrar() {
    /*this.autenticacionService.registrarUsuario(this.nombre, this.correo, this.contrasena)
      .subscribe(
        () => {
          // Registro exitoso, redireccionar a la página de inicio de sesión
        },
        error => {
          this.error = error.message;
        }
      );*/
  }
}
