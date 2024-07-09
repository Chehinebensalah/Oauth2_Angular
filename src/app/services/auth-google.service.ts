import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {
  
  
  constructor(private router :Router,private oAuthService : OAuthService) { 
    this.initConfiguration();
  }
  
  
  initConfiguration(){
    const authConfig : AuthConfig ={
      issuer:'https://accounts.google.com',
      strictDiscoveryDocumentValidation:false,
      clientId:'//TODO: PUT YOUR CLIENT ID ',
      redirectUri :window.location.origin +'/dashboard',
      scope:'openid profile email'
    }
    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    this.oAuthService.initImplicitFlow()
  }

  logout(){
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }
  getProfile(){
    return this.oAuthService.getIdentityClaims();
  }
  getToken(){
    return this.oAuthService.getAccessToken();
  }
}
