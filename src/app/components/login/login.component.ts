import { Component } from '@angular/core';
import { AuthGoogleService } from 'src/app/services/auth-google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService : AuthGoogleService){

  }
  signInWithGoogle(){
    this.authService.login()
  }
}
