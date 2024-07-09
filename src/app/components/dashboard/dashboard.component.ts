import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/services/auth-google.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  profile: any;


  constructor(private authService : AuthGoogleService,private router : Router){
    this.showData();
  }

  ngOnInit(){
   this.showData();
  }
  showData(){
    this.profile = this.authService.getProfile(); 
    console.log(this.authService.getToken());

  }
  logOut(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
