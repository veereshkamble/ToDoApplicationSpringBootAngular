import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate (username, password) {
    //console.log('before ' + this.isUserLoggedIn())
    if(username == "veereshkamble" && password == "password") {
      sessionStorage.setItem('authenticatedUser', username)
      //console.log('after ' + this.isUserLoggedIn())
      console.log("authenticated user " + sessionStorage.getItem('authenticatedUser'))
      return true;
    } 
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
}
