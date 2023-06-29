import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../autenticacion.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

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
  ngOnInit(): void {}

  login() {
    this.autenticacionService.login(this.usuario).pipe(take(1)).subscribe(
        (data:any) => {
          console.log(data);
          if(data[0] != null ){
            this.router.navigate(['/home']);
          }else {
            
              this.error = "Usuario invalido";
            
          }
          //this.error=;
          
        },
        error => {
          this.error = error.message;
        }
      );
  }
}
