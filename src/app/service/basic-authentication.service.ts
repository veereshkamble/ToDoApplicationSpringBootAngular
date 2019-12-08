import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

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

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    console.log("Execute  Hello World Bean Service")
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {
      headers: headers
    } );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}

export class AuthenticationBean {
  constructor(public message:string) {}
}