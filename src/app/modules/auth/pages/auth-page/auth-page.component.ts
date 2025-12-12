import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  FormDatosUser: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  

  ngOnInit(): void {
    this.FormDatosUser = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  sendLogin(): void {
    if (this.FormDatosUser.valid) {
      const { email, password } = this.FormDatosUser.value;

      this.authService
      .sendCredentials(this.FormDatosUser.value.email, this.FormDatosUser.value.password)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
          this.errorSession=false;
        },
        error: (err) => {
          console.error('Error en login:', err);
          this.errorSession=true;
        },
        complete: () => {
          console.log('Petición de login completada');
        }
      });

    }
  }
  


}
